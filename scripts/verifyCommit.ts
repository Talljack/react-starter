import { readFileSync } from 'node:fs';
import path from 'node:path';
import pc from 'picocolors';

const msgPath = path.resolve('.git/COMMIT_EDITMSG');
const msg = readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    `  ${pc.bgRed(pc.white(' ERROR '))} ${pc.red(`invalid commit message format.`)}\n\n${pc.red(
      `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
    )}    ${pc.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${pc.green(`fix(v-model): handle events on blur (close #28)`)}\n\n${pc.red(
        `  See .github/commit-convention.md for more details.\n`,
      )}`,
  );
  process.exit(1);
}

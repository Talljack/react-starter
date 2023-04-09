import React from 'react';
import { atom, useAtom } from 'jotai';
import { Button } from 'antd';
import { css } from '@emotion/react';
import reactSvg from '@/assets/react.svg';

// jotai docs: https://jotai.org/docs/core/use-atom
const countAtom = atom(0);
const Home: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div
      className="home"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className="header"
        css={css`
          width: 300px;
          height: 300px;
        `}
      >
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactSvg}
            className="logo react"
            css={css`
              width: 100%;
              height: 100%;
            `}
            alt="React logo"
          />
        </a>
      </div>
      <div className="gap-x-0">
        <Button data-testid="count-btn" onClick={() => setCount((count) => count + 1)}>
          {count}
        </Button>
      </div>
    </div>
  );
};

export default Home;

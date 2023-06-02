import React from 'react';
import { atom, useAtom } from 'jotai';
import reactSvg from '@/assets/react.svg';
import Button from '@/components/Common/Button';

// jotai docs: https://jotai.org/docs/core/use-atom
const countAtom = atom(0);
const Home: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="flex flex-col items-center justify-center w-full home">
      <div className="header w-[300px] h-[300px]">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactSvg} className="w-full h-full logo react" alt="React logo" />
        </a>
      </div>
      <div className="gap-x-0">
        <Button dataTestId="count-btn" type="primary" onClick={() => setCount((count) => count + 1)}>
          {count}
        </Button>
      </div>
    </div>
  );
};

export default Home;

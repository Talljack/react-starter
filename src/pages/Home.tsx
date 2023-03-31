import React from 'react';
import { useImmer } from 'use-immer';
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import reactSvg from '@/assets/react.svg';

const Home: React.FC = () => {
  const [count, setCount] = useImmer(0);
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
        <a href="https://react.dev" target="_blank">
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
        <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
};

export default Home;

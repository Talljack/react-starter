import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ConfigProvider, theme } from 'antd';
import { DevTools } from 'jotai-devtools';
import { router } from './router';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4fb233',
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <DevTools />
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;

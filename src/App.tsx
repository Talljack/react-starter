import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ConfigProvider, theme } from 'antd';
import { DevTools } from 'jotai-devtools';
import { router } from './router';
import 'antd/dist/reset.css';

// App组件
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
      <div>这是一个demo</div>
    </ConfigProvider>
  );
};

export default App;

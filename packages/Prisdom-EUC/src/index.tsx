import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import container from 'store-sdk/ioc-container/ioc';
import { IOCProvider } from 'store-sdk/ioc-container/ioc.context';
import './i18n/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from 'theme/chakraTheme';
import { RouterProvider } from 'react-router-dom';
import router from 'router/routes/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IOCProvider container={container}>
      <ChakraProvider theme={chakraTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </IOCProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

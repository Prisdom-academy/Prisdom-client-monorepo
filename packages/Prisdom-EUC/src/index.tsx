import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import './i18n/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '@prisdom/theme/chakraTheme';
import { RouterProvider } from 'react-router-dom';
import router from 'router/routes/router';
import container from '@prisdom/services/src/ioc';
import { initServices } from '@prisdom/services/src/initService';
import { init } from 'store-sdk/initService';
import { IOCProvider } from 'store-sdk/injection.hook';

initServices();
init();

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

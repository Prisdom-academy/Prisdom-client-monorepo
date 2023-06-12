import { createStandaloneToast } from '@chakra-ui/react';
import { ErrorHanlingServiceBase } from '@prisdom/services/interfaces/errorInterfaces';
import { chakraTheme } from '@prisdom/theme/chakraTheme';
import { GraphQLError } from 'graphql-request/dist/types';
import { injectable } from 'inversify';
import { get } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';

@injectable()
export class ErrorHanldingService extends ErrorHanlingServiceBase {
  public defaultHandling(error: any) {
    const element = document.createElement('div');
    element.id = 'Toast_ID';
    const { ToastContainer, toast } =
      createStandaloneToast(chakraTheme);

    ReactDOM.createRoot(element).render(
      <>
        <ToastContainer />
      </>
    );
    const mainErr = get(error, 'response.errors[0].message');

    setTimeout(() => {
      toast({
        title: 'An error occur!',
        description: mainErr || 'Internal server error',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
        onCloseComplete() {
          element.remove();
        }
      });
    }, 300);
  }

  public skipHandlingError(error: GraphQLError[]) {
    console.log(error);
  }
}

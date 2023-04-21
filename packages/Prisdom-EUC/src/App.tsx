import { Box, VStack } from '@chakra-ui/react';
import Navigation from 'layouts/navigations';
import { AuthContainer } from 'store-sdk/authStore/AuthView/AuthContainer';
import { ModalContainer } from 'store-sdk/modalServices/ModalViews/NotificationModalContainer';
import '@prisdom/theme/globalCSS/scroll.css';

function App() {
  return (
    <ModalContainer>
      <AuthContainer />
      <VStack align={'center'} textAlign="center" id="app">
        <Box height={0}>
          <Navigation />
        </Box>
      </VStack>
    </ModalContainer>
  );
}

export default App;

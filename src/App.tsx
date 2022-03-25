import { ChakraProvider } from '@chakra-ui/react';

import { SignIn } from './pages';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <SignIn />
    </ChakraProvider>
  );
}

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignIn, Posts, PrivateRoute } from './pages';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/posts"
            element={
              <PrivateRoute redirectTo="/">
                <Posts />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

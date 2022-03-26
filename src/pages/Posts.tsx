import { Flex } from '@chakra-ui/react';
import React from 'react';

import Header from '../components/Header';

export default function Posts() {
  return (
    <Flex minWidth={800} bg="white">
      <Header />
    </Flex>
  );
}

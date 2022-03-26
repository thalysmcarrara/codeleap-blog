import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <Flex as="header" w="100%" px="9" py="7" bg="black">
      <Heading>CodeLeap Network</Heading>
    </Flex>
  );
}

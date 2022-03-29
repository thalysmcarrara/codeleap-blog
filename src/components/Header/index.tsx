import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <Flex as="header" w="100%" px="9" h={20} bg="black" alignItems="center">
      <Heading
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        textAlign="left"
      >
        CodeLeap Network
      </Heading>
    </Flex>
  );
}

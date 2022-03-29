import {
  Flex,
  Heading,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import config from '../../config';

const {
  constants: { TOKEN_KEY },
} = config;

export default function Header() {
  const username = localStorage.getItem(TOKEN_KEY) || '';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate('/');
  };

  return (
    <Flex
      as="header"
      w="100%"
      px="9"
      h={20}
      bg="black"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        textAlign="left"
      >
        CodeLeap Network
      </Heading>
      <Popover placement="bottom">
        <PopoverTrigger>
          <Button rounded="full" w="42px" bg="transparent" outline="none">
            <Avatar name={username} />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent pr="4" w="110px">
            <PopoverArrow />
            <PopoverBody>
              <Button onClick={handleLogout} colorScheme="teal">
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}

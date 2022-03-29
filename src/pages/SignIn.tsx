import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginAction } from '../actions/User.actions';
import { Input } from '../components';
import config from '../config';

const {
  constants: { TOKEN_KEY },
} = config;

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = !!localStorage.getItem(TOKEN_KEY);
    if (isLogged) {
      navigate('/posts');
    }
  }, []);

  const [inputUser, setInputUser] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginAction(inputUser));
    navigate('/posts');
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputUser(e.currentTarget.value);
  };

  return (
    <SimpleGrid
      placeItems="center"
      w="100vw"
      h="100vh"
      bg="gray.100"
      px={['2', '3', '0']}
    >
      <Flex
        as="form"
        w={['100%', '100%', '500px']}
        minHeight="220px"
        bg="white"
        px="8"
        py="7"
        direction="column"
        onSubmit={handleSubmit}
      >
        <Text fontWeight="bold" fontSize="xl" lineHeight="7" mb="30px">
          Welcome to CodeLeap network!
        </Text>

        <Input
          label="Please enter your username"
          onChange={handleChange}
          value={inputUser}
          id="login-username-input"
          name="username"
        />

        <Flex justifyContent="flex-end" mt="5">
          <Button
            type="submit"
            disabled={!inputUser}
            px="30px"
            py="7px"
            bg="black"
            color="white"
            _hover={{
              bg: 'green.400',
              color: 'black',
            }}
          >
            ENTER
          </Button>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
}

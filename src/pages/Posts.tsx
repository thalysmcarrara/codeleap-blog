import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPersistedUserAction } from '../actions/User.actions';
import { PostCreateForm } from '../components';
import Header from '../components/Header';

export default function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersistedUserAction());
  }, []);

  return (
    <Flex direction="column" maxWidth={800} bg="white" mx="auto">
      <Header />
      <Flex as="main" direction="column" px="9">
        <PostCreateForm />
      </Flex>
    </Flex>
  );
}

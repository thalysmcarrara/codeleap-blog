import { Flex, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsAction } from '../actions/Post.actions';
import { getPostsSelector } from '../actions/selectors';
import { getPersistedUserAction } from '../actions/User.actions';
import { Post, FormCreatePost } from '../components';
import Header from '../components/Header';

export default function Posts() {
  const posts = useSelector(getPostsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersistedUserAction());
    dispatch(getPostsAction());
  }, []);

  return (
    <Flex direction="column" maxWidth={800} bg="white" mx="auto">
      <Header />
      <Flex as="main" direction="column" px={['2', '9']}>
        <FormCreatePost />
        <VStack spacing="6" as="ul" mb="8">
          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}

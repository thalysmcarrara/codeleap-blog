import { Flex, useToast, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsAction } from '../actions/Post.actions';
import {
  getIsCloseDeleteDialog,
  getIsCloseModal,
  getPostsSelector,
} from '../actions/selectors';
import { getPersistedUserAction } from '../actions/User.actions';
import { Post, FormCreatePost } from '../components';
import Header from '../components/Header';

export default function Posts() {
  const posts = useSelector(getPostsSelector);
  const isCloseEditModal = useSelector(getIsCloseModal);
  const isCloseDeleteLoading = useSelector(getIsCloseDeleteDialog);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getPersistedUserAction());
    dispatch(getPostsAction());
  }, []);

  useEffect(() => {
    if (isCloseDeleteLoading) {
      dispatch(getPostsAction());
      toast({
        title: 'Post Deleted',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [isCloseDeleteLoading]);

  useEffect(() => {
    if (isCloseEditModal) {
      dispatch(getPostsAction());
      toast({
        title: 'Post Edited',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [isCloseEditModal]);

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

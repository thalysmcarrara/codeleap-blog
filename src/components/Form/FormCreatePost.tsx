import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPostAction, getPostsAction } from '../../actions/Post.actions';
import {
  getIsloadingPostSelector,
  getIsShowAlertCreateSelector,
} from '../../actions/selectors';
import config from '../../config';

export function FormCreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isLoading = useSelector(getIsloadingPostSelector);
  const isShowAlertCreate = useSelector(getIsShowAlertCreateSelector);
  const toast = useToast();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isShowAlertCreate) {
      dispatch(getPostsAction());
      toast({
        title: 'Post Created',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [isShowAlertCreate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const username = localStorage.getItem(config.constants.TOKEN_KEY) || '';
    const post = { username, title, content };

    dispatch(createPostAction(post));
    setTitle('');
    setContent('');
  };

  return (
    <Flex
      direction="column"
      as="form"
      mt="10"
      mb="8"
      px={['3', '8']}
      pt="6"
      pb="8"
      border="1px"
      borderColor="gray.300"
      onSubmit={handleSubmit}
    >
      <Heading
        as="h2"
        color="black"
        fontWeight="bold"
        fontSize="xl"
        textAlign="left"
        mb="8"
      >
        What’s on your mind?
      </Heading>

      <FormControl mb="5">
        <FormLabel
          fontSize="md"
          lineHeight="shorter"
          htmlFor="title-create"
          mb="6px"
        >
          Title
        </FormLabel>
        <Input
          fontSize="sm"
          value={title}
          id="title-create"
          type="text"
          border="1px"
          borderColor="gray.400"
          placeholder="Hello world"
          _placeholder={{
            color: 'gray.200',
          }}
          _hover={{
            border: '1px',
            borderColor: 'gray.400',
          }}
          onChange={({ target }) => setTitle(target.value)}
        />
      </FormControl>

      <FormControl mb="8">
        <FormLabel
          fontSize="md"
          lineHeight="shorter"
          mb="6px"
          htmlFor="content-create"
        >
          Content
        </FormLabel>
        <Textarea
          value={content}
          fontSize="sm"
          id="content-create"
          border="1px"
          borderColor="gray.400"
          placeholder="Here is a sample placeholder"
          _hover={{
            border: '1px',
            borderColor: 'gray.400',
          }}
          _placeholder={{
            color: 'gray.200',
          }}
          onChange={({ target }) => setContent(target.value)}
        />
      </FormControl>

      <HStack justifyContent="end">
        <Button
          isLoading={isLoading}
          disabled={!(title && content)}
          type="submit"
          px="30px"
          py="7px"
          bg="black"
          color="white"
          _hover={{
            bg: title && content && 'green.400',
            color: title && content && 'black',
          }}
        >
          CREATE
        </Button>
      </HStack>
    </Flex>
  );
}

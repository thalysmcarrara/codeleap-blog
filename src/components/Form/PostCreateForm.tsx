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

import { createPostAction } from '../../actions/Post.actions';
import {
  getIsloadingPostSelector,
  getIsShowAlertCreate,
} from '../../actions/selectors';
import config from '../../config';

export function PostCreateForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isLoading = useSelector(getIsloadingPostSelector);
  const isShowAlertCreate = useSelector(getIsShowAlertCreate);
  const toast = useToast();

  useEffect(() => {
    if (isShowAlertCreate) {
      toast({
        title: 'Post Created',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [isShowAlertCreate]);

  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const username = localStorage.getItem(config.constants.TOKEN_KEY) || '';
    const post = { username, title, content };

    dispatch(createPostAction(post));
  };

  return (
    <Flex
      direction="column"
      as="form"
      mt="10"
      mb="8"
      px="8"
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
          // disabled
          type="submit"
          px="30px"
          py="7px"
          bg="black"
          color="white"
          _hover={{
            bg: 'green.400',
            color: 'black',
          }}
        >
          CREATE
        </Button>
      </HStack>
    </Flex>
  );
}

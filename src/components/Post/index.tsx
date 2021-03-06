import { Flex, Stack, Text } from '@chakra-ui/react';

import { PostType } from '../../actions/actionsTypes';
import PostHeader from './PostHeader';
import PostInfo from './PostInfo';

interface PostProps {
  postData: PostType;
}

export default function Post({ postData }: PostProps) {
  const { title, username: author, created_datetime, content, id } = postData;
  return (
    <Flex
      as="li"
      direction="column"
      w="100%"
      h="330"
      border="1px"
      borderColor="gray.300"
    >
      <PostHeader title={title} content={content} postId={id} />
      <Stack spacing="6" direction="column" p="6" h="100%">
        <PostInfo author={author} createdAt={created_datetime} />
        <Text textAlign="initial">{content}</Text>
      </Stack>
    </Flex>
  );
}

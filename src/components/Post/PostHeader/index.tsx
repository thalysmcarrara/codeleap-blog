import { Flex, Heading, Hide, HStack, Show } from '@chakra-ui/react';

import { ButtonDelete } from './ButtonDelete';
import { ButtonEdit } from './ButtonEdit';
import { MenuHamburguer } from './MenuHamburguer';

interface PostHeaderProps {
  title: string;
  content: string;
  postId: number;
}

export default function PostHeader({
  title,
  content,
  postId,
}: PostHeaderProps) {
  return (
    <Flex
      minH="70px"
      bg="black"
      justifyContent="space-between"
      px="7"
      py="5"
      align="center"
    >
      <Heading
        color="white"
        fontWeight="bold"
        fontSize="xl"
        lineHeight="7"
        mr="3"
      >
        {title}
      </Heading>
      <Hide below="sm">
        <HStack spacing="7">
          <ButtonDelete postId={postId} />
          <ButtonEdit oldContent={content} oldTitle={title} postId={postId} />
        </HStack>
      </Hide>
      <Show below="sm">
        <MenuHamburguer oldContent={content} oldTitle={title} postId={postId} />
      </Show>
    </Flex>
  );
}

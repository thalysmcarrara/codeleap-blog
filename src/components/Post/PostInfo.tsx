import { HStack, Text } from '@chakra-ui/react';
import moment from 'moment';

interface PostInfoProps {
  author: string;
  createdAt: string;
}

export default function PostInfo({ author, createdAt }: PostInfoProps) {
  return (
    <HStack justifyContent="space-between">
      <Text fontWeight="bold" fontSize="lg" color="gray.400" lineHeight="5">
        {`@${author}`}
      </Text>
      <Text
        as="time"
        fontWeight="normal"
        fontSize="lg"
        color="gray.400"
        lineHeight="5"
      >
        {moment(createdAt).fromNow()}
      </Text>
    </HStack>
  );
}

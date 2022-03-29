import { IconButton, useDisclosure } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';

import { DeleteDialog } from './DeleteDialog';

interface ButtonDeleteProps {
  postId: number;
}

export function ButtonDelete({ postId }: ButtonDeleteProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        minW="fit-content"
        h="fit-content"
        bg="black"
        w="30px"
        aria-label="Delete post"
        _hover={{
          bg: 'black',
        }}
        icon={<MdDeleteForever color="white" size="30" />}
      />
      <DeleteDialog isOpen={isOpen} onClose={onClose} postId={postId} />
    </>
  );
}

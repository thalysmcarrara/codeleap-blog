import { IconButton, useDisclosure } from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';

import { EditPostModal } from './EditPostModal';

interface ButtonEditProps {
  oldTitle: string;
  oldContent: string;
}

export function ButtonEdit({ oldContent, oldTitle }: ButtonEditProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        minW="fit-content"
        h="fit-content"
        bg="black"
        w="30px"
        aria-label="Edit post"
        _hover={{
          bg: 'black',
        }}
        icon={<BiEdit color="white" size="30" />}
      />
      <EditPostModal
        isOpen={isOpen}
        onClose={onClose}
        oldContent={oldContent}
        oldTitle={oldTitle}
      />
    </>
  );
}

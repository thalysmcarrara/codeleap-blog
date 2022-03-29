import { MenuItem, Text, useDisclosure } from '@chakra-ui/react';

import { DeleteDialog } from '../DeleteDialog';

interface MenuItemDelete {
  postId: number;
}

export default function MenuItemDelete({ postId }: MenuItemDelete) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <MenuItem onClick={onOpen}>
      <Text as="span">DELETE</Text>
      <DeleteDialog postId={postId} isOpen={isOpen} onClose={onClose} />
    </MenuItem>
  );
}

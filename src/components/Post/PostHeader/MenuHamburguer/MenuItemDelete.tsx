import { MenuItem, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { DeleteDialog } from '../DeleteDialog';

export default function MenuItemDelete() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <MenuItem onClick={onOpen}>
      <Text as="span">DELETE</Text>
      <DeleteDialog isOpen={isOpen} onClose={onClose} />
    </MenuItem>
  );
}

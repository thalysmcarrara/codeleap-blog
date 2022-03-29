import { MenuItem, Text, useDisclosure } from '@chakra-ui/react';

import { EditPostModal } from '../EditPostModal';

interface MenuItemEditProps {
  oldTitle: string;
  oldContent: string;
  postId: number;
}

export default function MenuItemEdit({
  oldTitle,
  oldContent,
  postId,
}: MenuItemEditProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <MenuItem onClick={onOpen}>
      <Text as="span">EDIT</Text>
      <EditPostModal
        isOpen={isOpen}
        onClose={onClose}
        oldTitle={oldTitle}
        oldContent={oldContent}
        postId={postId}
      />
    </MenuItem>
  );
}

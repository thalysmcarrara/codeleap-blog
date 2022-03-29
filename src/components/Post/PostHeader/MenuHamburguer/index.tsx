import { Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import MenuItemDelete from './MenuItemDelete';
import MenuItemEdit from './MenuItemEdit';

interface MenuHamburguerProps {
  oldContent: string;
  oldTitle: string;
  postId: number;
}

export function MenuHamburguer({
  oldContent,
  oldTitle,
  postId,
}: MenuHamburguerProps) {
  return (
    <Menu>
      <MenuButton>
        <Icon color="white" fontSize="5xl" as={MdMenu} />
      </MenuButton>
      <MenuList>
        <MenuItemDelete postId={postId} />
        <MenuItemEdit
          oldContent={oldContent}
          oldTitle={oldTitle}
          postId={postId}
        />
      </MenuList>
    </Menu>
  );
}

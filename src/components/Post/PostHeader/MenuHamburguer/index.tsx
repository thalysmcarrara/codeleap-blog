import { Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import MenuItemDelete from './MenuItemDelete';
import MenuItemEdit from './MenuItemEdit';

interface MenuHamburguerProps {
  oldContent: string;
  oldTitle: string;
}

export function MenuHamburguer({ oldContent, oldTitle }: MenuHamburguerProps) {
  return (
    <Menu>
      <MenuButton>
        <Icon color="white" fontSize="5xl" as={MdMenu} />
      </MenuButton>
      <MenuList>
        <MenuItemDelete />
        <MenuItemEdit oldContent={oldContent} oldTitle={oldTitle} />
      </MenuList>
    </Menu>
  );
}

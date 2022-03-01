import * as C from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import SidebarNav from './SidebarNav';

export default function Sidebar(): React.ReactElement {
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSidebar = C.useBreakpointValue({
    base: true,
    lg: false,
  });
  if (isDrawerSidebar) {
    return (
      <C.Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <C.DrawerOverlay>
          <C.DrawerContent bg="gray.800">
            <C.DrawerCloseButton mt="6" />
            <C.DrawerHeader>Navegação</C.DrawerHeader>
            <C.DrawerBody>
              <SidebarNav />
            </C.DrawerBody>
          </C.DrawerContent>
        </C.DrawerOverlay>
      </C.Drawer>
    );
  }
  return (
    <C.Box as="aside" w="64" mr="8">
      <SidebarNav />
    </C.Box>
  );
}

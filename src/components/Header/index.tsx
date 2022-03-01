import * as C from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header(): React.ReactElement {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = C.useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <C.Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <C.IconButton
          aria-label="Open navigation"
          icon={<C.Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <C.Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </C.Flex>
    </C.Flex>
  );
}

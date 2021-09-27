import * as C from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export default function NotificationsNav(): React.ReactElement {
  return (
    <C.HStack
      spacing="4"
      mx="8"
      pr="8"
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <C.Icon as={RiNotificationLine} fontSize="20" />
      <C.Icon as={RiUserAddLine} fontSize="20" />
    </C.HStack>
  );
}

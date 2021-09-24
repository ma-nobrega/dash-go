import * as C from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodFill,
  RiInputMethodLine,
} from 'react-icons/ri';

export default function Sidebar(): React.ReactElement {
  return (
    <C.Box as="aside" w="64" mr="8">
      <C.Stack spacing="12" align="flex-start">
        <C.Box>
          <C.Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </C.Text>
          <C.Stack spacing="4" mt="8" align="stretch">
            <C.Link display="flex" align="center">
              <C.Icon as={RiDashboardLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium">
                Dashboard
              </C.Text>
            </C.Link>
            <C.Link display="flex" align="center">
              <C.Icon as={RiContactsLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium">
                Usuários
              </C.Text>
            </C.Link>
          </C.Stack>
        </C.Box>
        <C.Box>
          <C.Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </C.Text>
          <C.Stack spacing="4" mt="8" align="stretch">
            <C.Link display="flex" align="center">
              <C.Icon as={RiInputMethodLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium">
                Formulário
              </C.Text>
            </C.Link>
            <C.Link display="flex" align="center">
              <C.Icon as={RiGitMergeLine} fontSize="20" />
              <C.Text ml="4" fontWeight="medium">
                Automação
              </C.Text>
            </C.Link>
          </C.Stack>
        </C.Box>
      </C.Stack>
    </C.Box>
  );
}

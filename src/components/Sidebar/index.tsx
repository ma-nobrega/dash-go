import * as C from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function Sidebar(): React.ReactElement {
  return (
    <C.Box as="aside" w="64" mr="8">
      <C.Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulário</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
      </C.Stack>
    </C.Box>
  );
}

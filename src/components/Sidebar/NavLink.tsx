import * as C from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends C.LinkProps {
  icon: React.ElementType;
  children: string;
  href: string;
}

export default function NavLink({
  icon,
  children,
  href,
  ...rest
}: NavLinkProps): React.ReactElement {
  return (
    <ActiveLink href={href} passHref>
      <C.Link display="flex" align="center" {...rest}>
        <C.Icon as={icon} fontSize="20" />
        <C.Text ml="4" fontWeight="medium">
          {children}
        </C.Text>
      </C.Link>
    </ActiveLink>
  );
}

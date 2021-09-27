import * as C from '@chakra-ui/react';

interface NavLinkProps extends C.LinkProps {
  icon: React.ElementType;
  children: string;
}

export default function NavLink({
  icon,
  children,
  ...rest
}: NavLinkProps): React.ReactElement {
  return (
    <C.Link display="flex" align="center" {...rest}>
      <C.Icon as={icon} fontSize="20" />
      <C.Text ml="4" fontWeight="medium">
        {children}
      </C.Text>
    </C.Link>
  );
}

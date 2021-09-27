import * as C from '@chakra-ui/react';

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function NavSection({
  title,
  children,
}: NavSectionProps): React.ReactElement {
  return (
    <C.Box>
      <C.Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </C.Text>
      <C.Stack spacing="4" mt="8" align="stretch">
        {children}
      </C.Stack>
    </C.Box>
  );
}

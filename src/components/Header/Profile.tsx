import * as C from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({
  showProfileData = true,
}: ProfileProps): React.ReactElement {
  return (
    <C.Flex align="center">
      {showProfileData && (
        <C.Box mr="4" textAlign="right">
          <C.Text>Matheus Nobrega</C.Text>
          <C.Text color="gray.300" fontSize="small">
            matheus.nobrega@gmail.com
          </C.Text>
        </C.Box>
      )}
      <C.Avatar
        size="md"
        name="Matheus Nobrega"
        src="https://github.com/ma-nobrega.png"
      />
    </C.Flex>
  );
}

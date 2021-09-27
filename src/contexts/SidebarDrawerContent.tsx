import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContent = createContext({} as SidebarDrawerContextData);
export function SidebarDrawerProvider({
  children,
}: SidebarDrawerContextProps): React.ReactElement {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath, disclosure]);

  return (
    <SidebarDrawerContent.Provider value={disclosure}>
      {children}
    </SidebarDrawerContent.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContent);

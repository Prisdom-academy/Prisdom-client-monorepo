import { PropsWithChildren } from 'react';
import NavBar from './Navbar';
import { chakra } from '@chakra-ui/react';

interface LayoutProps extends PropsWithChildren {
  currentLocation: string;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <NavBar currentLocaltion={props.currentLocation} />
      <chakra.main h="100vh" overflowY="auto">
        {props.children}
      </chakra.main>
    </>
  );
};

export default Layout;

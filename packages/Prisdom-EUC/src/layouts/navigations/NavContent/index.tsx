import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { styleGenerator } from './styles';

interface NavContentProps {
  isLeftNavFixed: boolean;
}

const NavContent = (props: NavContentProps) => {
  const { isLeftNavFixed } = props;
  const styles = styleGenerator(isLeftNavFixed);

  return (
    <Box sx={styles.root} id="nav-main-content">
      <Outlet></Outlet>
    </Box>
  );
};

export default NavContent;

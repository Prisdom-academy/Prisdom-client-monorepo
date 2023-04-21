import { Box, Button, ButtonProps, Text } from '@chakra-ui/react';
import { uniqueId } from 'lodash';
import { CollapsibleNavToken } from 'theme/base/interfaces';
import { TextLayer } from 'theme/typography/interfaces';
import { styleGen } from './styles';
import { Link } from 'react-router-dom';

interface ICollapsibleNavItemProps extends ButtonProps {
  onNavSelect?(id: string): void;
  id: string;
  isActive?: boolean;
  linkHref?: string;
}

const CollapsibleNavItem = (props: ICollapsibleNavItemProps) => {
  const {
    children,
    isActive,
    id = uniqueId(),
    onNavSelect,
    linkHref,
    ...rest
  } = props;
  const styles = styleGen(!!isActive);

  function _renderDot(radius: string, color: string) {
    return (
      <Box
        boxSize={radius}
        mr="1.7rem"
        borderRadius="50"
        bgColor={color}
      />
    );
  }

  function _onNavSelect() {
    onNavSelect && onNavSelect(id);
  }

  return (
    <Button {...rest} sx={styles.item} onClick={_onNavSelect}>
      {!isActive
        ? _renderDot(
            '.25rem',
            CollapsibleNavToken.cpn_nav_ver_content_inactive
          )
        : _renderDot(
            '.5rem',
            CollapsibleNavToken.cpn_nav_ver_content_active
          )}
      <Link to={linkHref || '/'} style={{ width: '100%' }}>
        <Text
          layerStyle={
            isActive
              ? TextLayer.baseBoldNormal
              : TextLayer.baseRegularNormal
          }
          color={
            isActive
              ? CollapsibleNavToken.cpn_nav_ver_content_active
              : CollapsibleNavToken.cpn_nav_ver_content_inactive
          }
          p=".5rem"
        >
          {children}
        </Text>
      </Link>
    </Button>
  );
};

export default CollapsibleNavItem;

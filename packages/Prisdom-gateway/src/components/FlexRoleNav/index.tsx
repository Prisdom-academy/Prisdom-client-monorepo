import { Center, Flex, FlexProps, Text } from '@chakra-ui/react';
import { stylesGenerator } from './styles';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { useEffect, useState } from 'react';

interface IFlexRoleNavProps extends FlexProps {
  onRoleChange?(role: SignUpRole): void;
}

export type SignUpRole = 'learner' | 'instructor';

const FlexRoleNav = (props: IFlexRoleNavProps) => {
  const [role, setRole] = useState<SignUpRole>('learner');
  const { onRoleChange, ...rest } = props;

  function _switchRole() {
    setRole(role === 'learner' ? 'instructor' : 'learner');
  }

  useEffect(() => {
    onRoleChange?.(role);
  }, [role]);

  const styles = stylesGenerator(role);

  return (
    <Flex sx={styles.root} onClick={_switchRole} {...rest}>
      <Center sx={styles.itemBox}>
        <Text
          layerStyle={TextLayer.smallBoldNormal}
          color={
            role === 'learner'
              ? ColorToken.primary_base
              : TypoToken.type_link_default
          }
        >
          Learner
        </Text>
      </Center>
      <Center sx={styles.itemBox}>
        <Text
          layerStyle={TextLayer.smallBoldNormal}
          color={
            role === 'instructor'
              ? ColorToken.primary_base
              : TypoToken.type_link_default
          }
        >
          Instructor
        </Text>
      </Center>
    </Flex>
  );
};

export default FlexRoleNav;

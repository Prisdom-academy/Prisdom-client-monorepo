import { Flex, HStack, StackProps, VStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import TextButton from '@prisdom/component-ui/buttons/TextButton';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import Link from 'next/link';

const listFooter = [
  {
    title: 'Policy',
    to: '#'
  },
  {
    title: 'Privacy',
    to: '#'
  },
  {
    title: 'Contact us',
    to: '#'
  }
];

interface FooterProps extends StackProps {}
const Footer = (props: FooterProps) => {
  return (
    <VStack {...props}>
      <HStack>
        {listFooter.map((item, i) => (
          <Flex align="center" key={item.title}>
            <Link href={item.to}>
              <TextButton variant={'secondary'}>
                {item.title}
              </TextButton>
            </Link>
            {i < listFooter.length - 1 && <Text> &#183; </Text>}
          </Flex>
        ))}
      </HStack>
      <Text
        layerStyle={TextLayer.smallRegularNormal2X}
        color={TypoToken.type_neutral_light}
      >
        © 2023 Prisdom Copyright
      </Text>
    </VStack>
  );
};

export default Footer;

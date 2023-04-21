import { Box, HStack, Text } from '@chakra-ui/react';
import { TextLayer } from 'theme/typography/interfaces';
import RightBar from './RightBar';
import SafeContainer from 'component-ui/SafeContainer';

const Dashboard = () => {
  return (
    <HStack
      id="dashboard"
      bg={'blackAlpha.200'}
      alignItems={'flex-start'}
    >
      <SafeContainer>
        <Box>
          <Text layerStyle={TextLayer.largeMedium4X}>Dashboard</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum sit amet tristique ex, at ornare turpis. Etiam
            malesuada augue a est iaculis, non mollis mi pulvinar.
            Nulla imperdiet nibh ac pretium consectetur. Aenean tempor
            justo ut enim imperdiet consequat. Nam sagittis, nisl quis
            placerat sollicitudin, ante purus dignissim arcu, suscipit
            varius ex velit sed turpis. Donec sodales vitae felis
            sagittis efficitur. Ut pellentesque dolor accumsan,
            aliquam nulla consectetur, vestibulum lorem. Praesent
            vitae lorem eget nisi ultrices molestie. Integer sit amet
            nisi in mauris imperdiet molestie vel blandit eros. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            posuere nulla odio, vitae lobortis ex fringilla et.
          </Text>
        </Box>
      </SafeContainer>
      <Box pt={6} pr={3} ml="auto">
        <RightBar />
      </Box>
    </HStack>
  );
};

export default Dashboard;

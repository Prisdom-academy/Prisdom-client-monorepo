import { Box, Img } from '@chakra-ui/react';

interface ProfileCoverPanelProps {
  imgSrc: string;
}

const ProfilePanelCover = (props: ProfileCoverPanelProps) => {
  return (
    <Box w="100%">
      <Img
        h="13.5rem"
        src={props.imgSrc}
        objectFit="cover"
        width="100%"
        borderRadius={'.75rem'}
      />
    </Box>
  );
};

export default ProfilePanelCover;

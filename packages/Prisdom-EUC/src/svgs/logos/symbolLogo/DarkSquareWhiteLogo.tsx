import { Icon, IconProps } from '@chakra-ui/react';

export const DarkSquareWhiteLogo = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 120 120" {...props}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="120" rx="15" fill="#222222" />
        <path d="M46 32H37L51 53L35 77H45L61 54L46 32Z" fill="white" />
        <path d="M74 43H85L70 65L86 88H73L58 67L74 43Z" fill="white" />
      </svg>
    </Icon>
  );
};

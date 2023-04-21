import { Icon, IconProps } from '@chakra-ui/react';

export const DarkCircleOriginLogo = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 120 120" {...props}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="120" height="120" rx="60" fill="#1D1F2A" />
        <path
          d="M46 32H37L51 53L35 77H45L61 54L46 32Z"
          fill="url(#paint0_linear_96_1180)"
        />
        <path
          d="M74 43H85L70 65L86 88H73L58 67L74 43Z"
          fill="url(#paint1_linear_96_1180)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_96_1180"
            x1="35"
            y1="32"
            x2="73.9856"
            y2="54.525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0084D5" />
            <stop offset="1" stopColor="#44B8FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_96_1180"
            x1="86"
            y1="43"
            x2="45.6298"
            y2="68.1193"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0084D5" />
            <stop offset="1" stopColor="#44B8FF" />
          </linearGradient>
        </defs>
      </svg>
    </Icon>
  );
};

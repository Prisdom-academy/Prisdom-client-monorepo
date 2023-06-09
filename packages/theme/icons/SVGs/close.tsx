import { createIcon } from '@chakra-ui/react';

const CloseIcon = createIcon({
  displayName: 'Close',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5294 4.46978C19.8222 4.76268 19.8222 5.23755 19.5294 5.53044L5.53029 19.5295C5.2374 19.8224 4.76253 19.8224 4.46963 19.5295C4.17674 19.2366 4.17674 18.7617 4.46963 18.4688L18.4687 4.46978C18.7616 4.17689 19.2365 4.17689 19.5294 4.46978Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47065 4.46978C4.76354 4.17689 5.23841 4.17689 5.53131 4.46978L19.5304 18.4688C19.8233 18.7617 19.8233 19.2366 19.5304 19.5295C19.2375 19.8224 18.7626 19.8224 18.4697 19.5295L4.47065 5.53044C4.17775 5.23755 4.17775 4.76268 4.47065 4.46978Z"
      />
    </>
  )
});

export default CloseIcon;

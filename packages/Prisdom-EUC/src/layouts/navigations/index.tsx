import { HStack } from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import LeftNav from './LeftNav';
import NavContent from './NavContent';
import TopNav from './TopNav';

const Navigation = () => {
  const [isLeftNavExpand, setIsLeftNavExpand] = useState(false);
  const [isLeftNavFixed, setIsLeftNavFixed] = useState(false);

  const mockData = {
    userName: 'Katarina Gomez',
    imgSrc:
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/08/woman-portrait-smile-dimples-1296x728-body2-affiliative-1296x728.jpg?w=1155&h=1528',
    noticCount: 6
  };

  return (
    <Fragment>
      <TopNav
        onMenuClick={() => setIsLeftNavFixed(!isLeftNavFixed)}
        userName={mockData.userName}
        imgSrc={mockData.imgSrc}
        notificationCount={mockData.noticCount}
      />
      <HStack pos="relative" zIndex="-1">
        <LeftNav
          isFixed={isLeftNavFixed}
          isLeftNavExpand={isLeftNavExpand}
          onMouseEnter={() => setIsLeftNavExpand(true)}
          onMouseOut={() => setIsLeftNavExpand(false)}
        />
        <NavContent isLeftNavFixed={isLeftNavFixed} />
      </HStack>
    </Fragment>
  );
};

export default Navigation;

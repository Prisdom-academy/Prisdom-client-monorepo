import { Flex } from '@chakra-ui/react';
import useDraggableScroll from 'hooks/useDraggableScroll';
import { useRef } from 'react';
import RecentCourse, { ICourseCardProps } from '.';
import { styles } from './styles';

interface IRecentCoursesSliderProps {
  listItems: ICourseCardProps[];
  width?: number;
  cardItem?: JSX.Element;
}

const RecentCoursesSlider = (props: IRecentCoursesSliderProps) => {
  const { listItems, width = '100%' } = props;
  const sliderRef = useRef<HTMLDivElement>(null);
  const draggableScroll = useDraggableScroll(sliderRef);

  return (
    <Flex
      w={width}
      minH="6.8rem"
      sx={styles.root}
      ref={sliderRef}
      {...draggableScroll}
    >
      {listItems.map((item) => (
        <RecentCourse
          className="recentCourseItem"
          key={listItems.indexOf(item)}
          imgUrl={item.imgUrl}
          title={item.title}
          timeByHour={item.timeByHour}
        />
      ))}
    </Flex>
  );
};

export default RecentCoursesSlider;

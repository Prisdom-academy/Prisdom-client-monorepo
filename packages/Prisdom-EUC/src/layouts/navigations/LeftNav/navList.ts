import {
  CourseIconOutlined,
  CourseIconFilled
} from 'theme/icons/SVGs/course';
import {
  ExploreIconFilled,
  ExploreIconOutlined
} from 'theme/icons/SVGs/explore';

export const navList = [
  {
    IconCollapsed: CourseIconOutlined,
    IconExpanded: CourseIconFilled,
    title: 'Learning',
    subItems: [
      { title: 'Dashboard', linkHref: '/' },
      { title: 'Courses', linkHref: '/courses' },
      { title: 'Ask question', linkHref: '/ask-question' }
    ]
  },
  {
    IconCollapsed: ExploreIconOutlined,
    IconExpanded: ExploreIconFilled,
    title: 'Explore',
    subItems: [
      { title: 'Dashboard', linkHref: '/explore' },
      { title: 'See more', linkHref: '/explore/more' }
    ]
  }
];

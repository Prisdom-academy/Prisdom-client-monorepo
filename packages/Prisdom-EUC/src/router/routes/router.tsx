import App from 'App';
import AskQuestion from 'pages/AskQuestion';
import Courses from 'pages/Courses';
import Dashboard from 'pages/Dashboard';
import DefaultExplore from 'pages/Explore/Default';
import ExploreMore from 'pages/Explore/More';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'ask-question',
        element: <AskQuestion />
      }
    ]
  },
  {
    path: '/explore',
    element: <App />,
    children: [
      {
        path: '',
        element: <DefaultExplore />
      },
      {
        path: 'more',
        element: <ExploreMore />
      }
    ]
  }
]);
export default router;

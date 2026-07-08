import { createBrowserRouter } from 'react-router';
import RootLayout from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import OpportunitiesPage from '../pages/OpportunitiesPage';
import OpportunityDetailPage from '../pages/OpportunityDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Application route tree.
 * RootLayout wraps every route — it renders Navbar + <Outlet> + Footer
 * so the shell is never re-mounted on navigation.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'opportunities', Component: OpportunitiesPage },
      { path: 'opportunities/:id', Component: OpportunityDetailPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);

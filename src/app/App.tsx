import { RouterProvider } from 'react-router';
import { router } from './routes';

/**
 * App entry point — delegates all rendering to React Router.
 * Page layout (Navbar/Footer) lives in RootLayout; pages live in /pages.
 */
export default function App() {
  return <RouterProvider router={router} />;
}

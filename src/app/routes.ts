import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../components/layout/RootLayout';
import ServerErrorPage from '../pages/ServerErrorPage';

const HomePage = lazy(() => import('../pages/HomePage'));
const OpportunitiesPage = lazy(() => import('../pages/OpportunitiesPage'));
const OpportunityDetailPage = lazy(() => import('../pages/OpportunityDetailPage'));
const InsightsPage = lazy(() => import('../pages/InsightsPage'));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('../pages/ContactUsPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('../pages/TermsConditionsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

/**
 * Application route tree.
 * RootLayout wraps every route — it renders Navbar + <Outlet> + Footer
 * so the shell is never re-mounted on navigation.
 * Pages are code-split and lazy loaded to optimize Core Web Vitals.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ServerErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: 'opportunities', Component: OpportunitiesPage },
      { path: 'opportunities/:id', Component: OpportunityDetailPage },
      { path: 'insights', Component: InsightsPage },
      { path: 'about-us', Component: AboutUsPage },
      { path: 'contact-us', Component: ContactUsPage },
      { path: 'privacy-policy', Component: PrivacyPolicyPage },
      { path: 'terms-conditions', Component: TermsConditionsPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);

import { RouteObject } from 'react-router-dom';

/**
 * All these routes are relative to the `/admin/settings/*` route
 * as such their path should not start with a `/` or include the `/settings` prefix.
 */
export const getEERoutes = (): RouteObject[] => [
  ...(window.kayona.features.isEnabled(window.kayona.features.AUDIT_LOGS)
    ? [
        {
          path: 'audit-logs',
          lazy: async () => {
            const { ProtectedListPage } = await import('./pages/AuditLogs/ListPage');

            return {
              Component: ProtectedListPage,
            };
          },
        },
      ]
    : []),
  ...(window.kayona.features.isEnabled(window.kayona.features.SSO)
    ? [
        {
          path: 'single-sign-on',
          lazy: async () => {
            const { ProtectedSSO } = await import('./pages/SingleSignOnPage');

            return {
              Component: ProtectedSSO,
            };
          },
        },
      ]
    : []),
];

import { generateInstallId, env } from '@strapi/utils';

export const sendEvent = async (event: string, uuid: string, installId?: any) => {
  const analyticsUrl = env('KAYONA_ANALYTICS_URL', 'https://analytics.kayona.io');
  try {
    await fetch(`${analyticsUrl}/api/v2/track`, {
      method: 'POST',
      body: JSON.stringify({
        event,
        deviceId: generateInstallId(uuid, installId),
        groupProperties: { projectId: uuid },
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Kayona-Event': event,
      },
    });
  } catch (e) {
    // ...
  }
};

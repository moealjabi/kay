import { adminApi } from '@kayona/admin/strapi-admin';

const i18nApi = adminApi.enhanceEndpoints({
  addTagTypes: ['Locale', 'KeyStatistics', 'Settings', 'AILocalizationJobs'],
});

export { i18nApi };

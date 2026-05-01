import type { StrapiApp } from '@kayona/strapi/admin';

export default {
  config: {
    locales: ['fr'],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};

'use strict';

/**
 * testing service
 */

const { createCoreService } = require('@kayona/strapi').factories;

module.exports = createCoreService('api::testing.testing');

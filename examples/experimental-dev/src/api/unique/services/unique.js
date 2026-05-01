'use strict';

/**
 * unique service
 */

const { createCoreService } = require('@kayona/strapi').factories;

module.exports = createCoreService('api::unique.unique');

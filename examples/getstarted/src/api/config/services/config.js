'use strict';

/**
 * config service
 */

const { createCoreService } = require('@kayona/strapi').factories;

module.exports = createCoreService('api::config.config');

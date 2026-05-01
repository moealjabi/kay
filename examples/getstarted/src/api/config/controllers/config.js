'use strict';

/**
 * config controller
 */

const { createCoreController } = require('@kayona/strapi').factories;

module.exports = createCoreController('api::config.config');

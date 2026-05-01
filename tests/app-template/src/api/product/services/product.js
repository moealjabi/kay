'use strict';

/**
 * product service
 */

const { createCoreService } = require('@kayona/strapi').factories;

module.exports = createCoreService('api::product.product');

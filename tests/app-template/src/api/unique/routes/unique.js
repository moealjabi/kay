'use strict';

/**
 * unique router
 */

const { createCoreRouter } = require('@kayona/strapi').factories;

module.exports = createCoreRouter('api::unique.unique');

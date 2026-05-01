'use strict';

/**
 * testing controller
 */

const { createCoreController } = require('@kayona/strapi').factories;

module.exports = createCoreController('api::testing.testing');

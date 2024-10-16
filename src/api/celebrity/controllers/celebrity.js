'use strict';

/**
 * celebrity controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::celebrity.celebrity');

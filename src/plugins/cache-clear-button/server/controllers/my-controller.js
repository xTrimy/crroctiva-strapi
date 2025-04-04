'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('cache-clear-button')
      .service('myService')
      .getWelcomeMessage();
  },
});

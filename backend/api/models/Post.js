/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      maxLength: 200
    },
    phone: {
      type: 'string',
      maxLength: 10
    },
    imgUrl: {
      type: 'string',
      maxLength: 200
    }

  },

};

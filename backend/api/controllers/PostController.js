/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getData: async function(req, res) {

      var data = await Post.find();

      res.json(data);
    }

};

const { Bookmark } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
          where: {
              SongId: songId,
              UserId: userId
          }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the bookmark.'
      })
    }
},
    async post (req, res) {
        try {
          const {songId, userI} = req.body
          const bookmark = await Bookmark.findOne({
              where:{
                  SongId: songId,
                  UserId: userId
              }
          })
          if (bookmark) {
              return res.status(400).send({
                  error: "you already have this set as a bookmark"
              })
          }
           await Bookmark.create(bookmark)
          res.send(bookmark)
        } catch (err) {
          res.status(500).send({
            error: 'An error has occured trying to create the bookmark.'
          })
        }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findByPk(bookmarkId)
       await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark.'
      })
    }
}
}

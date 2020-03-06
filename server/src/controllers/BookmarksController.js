const {
  Bookmark,
  Room,
  User
} = require('../models')
const _ = require('lodash')
const {Op} = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {roomId} = req.query
      const where = {
        UserId: userId
      }
      if (roomId) {
        where.RoomId = roomId
      }
      const bookmarks = await Bookmark.findAll({
          where: where,
          include: [
            {
              model: Room
            }
          ]
      })
      .map(bookmark => bookmark.toJSON())
      .map(bookmark => _.extend(
        {},
        bookmark.Room,
        bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the bookmark.'
      })
    }
},
    async post (req, res) {
        try {
          const userId = req.user.id
          const {roomId} = req.body
          const bookmark = await Bookmark.findOne({
              where: {
                  RoomId: roomId,
                  UserId: userId
              }
          })
          if (bookmark) {
              return res.status(400).send({
                  error: "you already have this set as a bookmark"
              })
          }
          const newBookmark = await Bookmark.create({
              RoomId: roomId,
              UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            console.log(err)
          res.status(400).send({
            error: 'An error has occured trying to create the bookmark.'
          })
        }
  },
  async delete (req, res) {
    try {
      const userId= req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
       await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark.'
      })
    }
}
}

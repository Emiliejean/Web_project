const { Song } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId= req.user.id
      const {songId} = req.params
      const song = await Song.findOne({
        where: {
          id: songId,
          UserId: userId
        }
      })
      if (!song) {
        return res.status(403).send({
          error: 'you do not have access to this song'
        })
      }
       await song.destroy()
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the song.'
      })
    }
}
}

const { Room } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let rooms = null
      const search = req.query.search
      if (search) {
        rooms = await Room.findAll({
          where: {
            [Op.or]: [
              'name', 'number', 'price', 'numberpers'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        rooms = await Room.findAll({
        })
      }
      res.send(rooms)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the rooms.'
      })
    }
  },
  async show (req, res) {
    try {
      const room = await Room.findByPk(req.params.roomId)
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the rooms.'
      })
    }
  },
  async post (req, res) {
    try {
      const room = await Room.create(req.body)
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the rooms'
      })
    }
  },
  async put (req, res) {
    try {
      const room = await Room.update(req.body, {
        where: {
          id: req.params.roomId
        }
      })
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the rooms'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId= req.user.id
      const {roomId} = req.params
      const room = await Room.findOne({
        where: {
          id: roomId,
          UserId: userId
        }
      })
      if (!room) {
        return res.status(403).send({
          error: 'you do not have access to this room'
        })
      }
       await room.destroy()
      res.send(room)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the room.'
      })
    }
}
}

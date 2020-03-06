const {
  History,
  Room,
  User
} = require('../models')
const {Op} = require('sequelize')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
          include: [
            {
              model: Room
            }
          ]
      })
      .map(history => history.toJSON())
      .map(history => _.extend(
        {},
        history.Room,
        history
        ))
        res.send(_.uniqBy(histories, history => history.RoomId))

    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the history.'
      })
    }
},
    async post (req, res) {
        try {
          const userId = req.user.id
          const {roomId} = req.body
          const history = await History.create({
              RoomId: roomId,
              UserId: userId
            })
            res.send(history)
        } catch (err) {
            console.log(err)
          res.status(500).send({
            error: 'An error has occured trying to create the history.'
          })
        }
  }
}

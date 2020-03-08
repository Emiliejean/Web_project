const { Agenda } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let agendas = null
      const search = req.query.search
      if (search) {
        agendas = await Agenda.findAll({
          where: {
            [Op.or]: [
              'name', 'price', 'numberpers'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        agendas = await Agenda.findAll({
        })
      }
      res.send(agendas)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the agendas.'
      })
    }
  },
  async show (req, res) {
    try {
      const agenda = await Agenda.findByPk(req.params.agendaId)
      res.send(agenda)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the agendas.'
      })
    }
  },
  async post (req, res) {
    try {
      const agenda = await Agenda.create(req.body)
      res.send(agenda)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the agendas'
      })
    }
  },
  async put (req, res) {
    try {
      const agenda = await Agenda.update(req.body, {
        where: {
          id: req.params.agendaId
        }
      })
      res.send(agenda)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the agendas'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId= req.user.id
      const {agendaId} = req.params
      const agenda = await Agenda.findOne({
        where: {
          id: agendaId,
          UserId: userId
        }
      })
      if (!agenda) {
        return res.status(403).send({
          error: 'you do not have access to this agenda'
        })
      }
       await agenda.destroy()
      res.send(agenda)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the agenda.'
      })
    }
}
}

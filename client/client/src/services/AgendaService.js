import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('agendas', {
      params: {
        search: search
      }
    })
  },
  show (agendaId) {
    return Api().get(`agendas/${agendaId}`)
  },
  post (agenda) {
    return Api().post('agendas', agenda)
  },
  put (agenda) {
    return Api().put(`agendas/${agenda.id}`, agenda)
  }
}

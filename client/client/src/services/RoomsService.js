import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('rooms', {
      params: {
        search: search
      }
    })
  },
  show (roomId) {
    return Api().get(`rooms/${roomId}`)
  },
  post (room) {
    return Api().post('rooms', room)
  },
  put (room) {
    return Api().put(`rooms/${room.id}`, room)
  }
}

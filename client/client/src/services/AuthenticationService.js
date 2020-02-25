import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
/* AuthenticationService.register({
    email: 'test@gmakil.com',
    password: '123'
}) */

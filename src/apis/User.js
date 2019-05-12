import http from '../utils/HttpUtil'

const UserApi = {
  login : params => {
    return http.post('/public/user/login', params)
  }
}

export default UserApi
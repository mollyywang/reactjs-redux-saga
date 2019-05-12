import http from '../utils/HttpUtil'

const UserApi = {
  login: params => http.post('/public/user/login', params),
}

export default UserApi

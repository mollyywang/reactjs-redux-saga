import http from '../utils/HttpUtil'

const StarApi = {
  getlist: () => http.get('/star/starlist'),
}

export default StarApi

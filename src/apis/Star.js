import http from '../utils/HttpUtil'

const StarApi = {
  getlist : () => {
    return http.get('/star/starlist')
  }
}

export default StarApi

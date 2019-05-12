import http from '../utils/HttpUtil'

const ProductlistApi = {
  getlist : params => {
    return http.post('/public/products/getlist', params)
  }
}

export default ProductlistApi
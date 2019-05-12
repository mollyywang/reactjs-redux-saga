import http from '../utils/HttpUtil'

const ProductlistApi = {
  getlist: params => http.post('/public/products/getlist', params),
}

export default ProductlistApi

import axios from 'axios'

const http = axios.create({
  baseURL: 'http://127.0.0.1:5001',
})

http.interceptors.request.use(
  (config) => {
    const newConfig = config
    const jsonStr = localStorage.getItem('persist:root')
    console.log(jsonStr)
    const user = JSON.parse(JSON.parse(jsonStr).user)
    const token = user.token || ''
    newConfig.headers.Authorization = `Bearer ${token}`
    return newConfig
  },
  error => Promise.reject(error),
)

http.interceptors.response.use(
  function(response) {
    // If the request succeeds, we don't have to do anything and just return the response
    return response
  },
  function(error) {
    const errorResponse = error.response
    if (isTokenExpiredError(errorResponse)) {
      localStorage.clear();
      window.location.reload();
      //https://www.techynovice.com/setting-up-JWT-token-refresh-mechanism-with-axios/
    }
    // If the error is due to other reasons, we just throw it back to axios
    return Promise.reject(error)
  }
)
function isTokenExpiredError(errorResponse) {
  return errorResponse.status === 401
}

export default http

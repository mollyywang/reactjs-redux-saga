import axios from 'axios'

const http = axios.create({
  baseURL: 'http://127.0.0.1:5001',
})

http.interceptors.request.use(
  (config) => {
    const jsonStr = localStorage.getItem('persist:root')
    console.log(jsonStr)
    const user = JSON.parse(JSON.parse(jsonStr).user)
    const token = user.token || ''
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error =>
    // Do something with request error
    Promise.reject(error),

)


export default http

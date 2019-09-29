import axios from 'axios'

// 创建axios 实例
const service = axios.create({
  baseURL: window.location.protocol + '//' + window.location.host,
})

service.interceptors.request.use(
  config => {
    // 中英文标识
    config.headers['Accept-Language'] = sessionStorage.getItem('locale') || 'zh'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const result = response.data
    return result.data === undefined ? result : result.data
  },
  error => {
    Promise.reject(error)
  }
)

export default service

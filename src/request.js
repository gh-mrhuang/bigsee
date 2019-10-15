import axios from 'axios'

const TIMEOUT = 3000 * 10 // 请求超时（timeout）时间

// 创建axios 实例
const service = axios.create({
    baseURL: 'http://120.24.190.197:6699', // api的base_url
    timeout: TIMEOUT, // request timeout
    // withCredentials: true, //  跨域安全策略
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
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
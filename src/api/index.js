import request from '@/request.js'

let INTER_NAME = {
    BANNER_IMG: '/HomePagelb/queryAll'
}

const REQUEST_TYPE = {
    POST: 'post',
    GET: 'get'
}

/**
 * 请求首页轮播图
 * @param params
 */
export function getBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}
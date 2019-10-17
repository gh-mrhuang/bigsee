import request from '@/request.js'

let INTER_NAME = {
    BANNER_IMG: '/HomePagelb/queryAll',
    BANNER_ZHANLAN_IMG:'/Homepagezl/queryAll',
    BANNER_WENCHUANG_IMG:'/Wctext/queryAll',
    BANNER_CHAUNGPING_IMG:'/Collections/queryAll',
    BANNER_REBO_IMG:'/Broadcastlist/queryAll',
    BANNER_REBOXIONGQING_IMG:'/Hbroadcast/queryByid',
    BANNER_JINGPINGTITLE_IMG:'Wclist/queryAll',
    BANNER_JINGPINGTITLELeft_IMG:'Leftlist/queryAll',
    BANNER_JINGPINGTITLE_DETAIL:'Rightlist/queryByid',
    BANNER_NEW_LIST:'News/queryAll',
    BANNER_NEW_DETAIL:'News/queryByid'
}

const REQUEST_TYPE = {
    POST: 'post',
    GET: 'get'
}

/**
 * 请求旭观新闻内容
 * @param params
 */
export function getNewDetailt(params) {
    return request({
        url: INTER_NAME.BANNER_NEW_DETAIL,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观新闻列表
 * @param params
 */
export function getNew(params) {
    return request({
        url: INTER_NAME.BANNER_NEW_LIST,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观精品选项内容
 * @param params
 */
export function getJingPingTabDetail(params) {
    return request({
        url: INTER_NAME.BANNER_JINGPINGTITLE_DETAIL,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观精品选项列表
 * @param params
 */
export function getJingPingTab(params) {
    return request({
        url: INTER_NAME.BANNER_JINGPINGTITLELeft_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
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

/**
 * 请求旭观展览
 * @param params
 */
export function getZhanLanBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_ZHANLAN_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观文创图片列表
 * @param params
 */
export function getWengChuangBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_WENCHUANG_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}
/**
 * 请求旭观文创列表
 * @param params
 */
export function getWengChuangTitleBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_JINGPINGTITLE_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观藏品图片列表
 * @param params
 */
export function getChangPingBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_CHAUNGPING_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观热播图片列表
 * @param params
 */
export function getReBoBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_REBO_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}

/**
 * 请求旭观热播详情图片列表
 * @param params
 */
export function getReBoXiongQingBannerImg(params) {
    return request({
        url: INTER_NAME.BANNER_REBOXIONGQING_IMG,
        method: REQUEST_TYPE.GET,
        params: params
    })
}
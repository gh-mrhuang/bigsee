const path = require('path');
// 拼接路径
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    outputDir: "dist",
    assetsDir: 'public',
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                'vue$': 'vue/dist/vue.esm.js',
                'platform': resolve('src/views/platform')
            }
        }
    },
}
// vue.config.js file to be place in the root of your repository

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuerg/'
        : '/'
}

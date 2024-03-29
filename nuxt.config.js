export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '番茄炒蛋的blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://at.alicdn.com/t/font_3284581_o282f2goec.css" }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'md-editor-v3/lib/style.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/css/main.scss',
    '@/assets/css/theme/basic.css',
    '@/assets/css/theme/qwz.css',
    '@/assets/css/code-theme/mac.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/highlight',
    '@/plugins/axios',
    '@/plugins/vuemarkdown',
    { src: '@/assets/js/iconfont.js', ssr: false },
    { src: '~/plugins/vue-back-top.js', ssr: false },
    '@/plugins/vue-inject'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: '/api/',
    credential: true
  },
 
  proxy: {
    '/api/': {
      target: 'http://localhost:3001/', // 目标服务器ip
      pathRewrite: {
        '^/api/': '/',  // 把 /api 替换成 /
        changeOrigin: true // 是否跨域
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor: ["axios"]
  }
}

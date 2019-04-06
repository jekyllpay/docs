module.exports = {
    title: 'Jekyll Pay',
    description: "Jekyll Pay Documentation",
    base: '/',
    dest: "dist",
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Jekyll Pay Docs',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress 1.x',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    port: 8081,
    markdown: {
        linkify: true
    },
    themeConfig: {
        docsDir: 'docs',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API Reference', link: '/api/' },
            { text: 'Github', link: 'https://github.com/jekyllpay/docs' }
        ],
        sidebar: [
            '/',
            {
                title: 'Guide',
                link: '/guide/',
                sidebarDepth: 1,
                collapsable: false
            },
            {
                title: 'API Reference',
                link: '/api/',
                sidebarDepth: 1,
                collapsable: false
            }

        ]
    }
}

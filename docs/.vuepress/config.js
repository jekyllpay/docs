module.exports = {
    title: 'Jekyll Pay',
    description: "Jekyll Pay Documentation",
    base: '/',
    dest: "dist",
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Jekyll Pay Docs',
            description: 'Jekyll Pay Documentation'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Jekyll Pay 官方文档',
            description: 'Jekyll Pay 官方文档'
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

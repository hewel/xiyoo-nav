const menuData = [
    {
        itemName: '动画影视',
        itemSymbol: 'movie',
    },
    {
        itemName: '游戏娱乐',
        itemSymbol: 'game',
    },
    {
        itemName: '前端设计',
        itemSymbol: 'frontend',
    },
    {
        itemName: 'CSS 工具库',
        itemSymbol: 'css',
    },
    {
        itemName: 'JS 工具库',
        itemSymbol: 'javascript',
    },
    {
        itemName: '新闻快报',
        itemSymbol: 'news',
    },
    {
        itemName: '设计交互',
        itemSymbol: 'design',
    },
    {
        itemName: '后端开发',
        itemSymbol: 'backend',
    },
    {
        itemName: '开发工具',
        itemSymbol: 'tools',
    },
]

const linkData = {
    movieLinks: [{
            linkName: 'BT 之家',
            linkSymbol: 'btbtt',
            linkUrl: 'http://www.btbtt.me/',
        },
        {
            linkName: '动漫花园',
            linkSymbol: 'dmhy',
            linkUrl: 'https://share.dmhy.org/',
        },
        {
            linkName: '片源网',
            linkSymbol: 'pianyuan',
            linkUrl: 'http://pianyuan.net/',
        },
        {
            linkName: 'RARBG',
            linkSymbol: 'rarbg',
            linkUrl: 'https://rarbg.is/torrents.php',
        },
        {
            linkName: '末日动漫',
            linkSymbol: 'acgnx',
            linkUrl: 'https://share.acgnx.se/',
        },
        {
            linkName: '豆瓣影视',
            linkSymbol: 'douban',
            linkUrl: 'https://movie.douban.com/',
        },
        {
            linkName: '优酷',
            linkSymbol: 'youku',
            linkUrl: 'http://www.youku.com/',
        },
        {
            linkName: '哔哩哔哩',
            linkSymbol: 'bilibili',
            linkUrl: 'https://www.bilibili.com/',
        },
        {
            linkName: 'Sub HD',
            linkSymbol: 'subhd',
            linkUrl: 'http://subhd.com/',
        },
        {
            linkName: '字幕库',
            linkSymbol: 'zimuku',
            linkUrl: 'https://www.zimuku.cn/',
        },
        {
            linkName: '翻托邦字幕组',
            linkSymbol: 'fantopia',
            linkUrl: 'https://fantopia.club/',
        },
        {
            linkName: 'Fix 字幕侠',
            linkSymbol: 'zimuxia',
            linkUrl: 'http://www.zimuxia.cn/',
        },
        {
            linkName: 'SSK 字幕组',
            linkSymbol: 'sskzmz',
            linkUrl: 'http://www.sskzmz.com/',
        },
        {
            linkName: '人人字幕组',
            linkSymbol: 'zimuzu',
            linkUrl: 'http://www.zimuzu.tv/',
        },
        {
            linkName: '诸神字幕组',
            linkSymbol: 'kamigami',
            linkUrl: 'http://www.kamigami.org/',
        },
    ],
    gameLinks: [{
            linkName: '游民星空',
            linkSymbol: 'gamersky',
            linkUrl: 'http://www.gamersky.com/',
        },
        {
            linkName: '机核网',
            linkSymbol: 'gcores',
            linkUrl: 'https://www.g-cores.com/',
        },
        {
            linkName: '游戏时光',
            linkSymbol: 'vgtime',
            linkUrl: 'http://www.vgtime.com/',
        },
        {
            linkName: '触乐网',
            linkSymbol: 'chuapp',
            linkUrl: 'http://www.chuapp.com/',
        },
        {
            linkName: '凯恩之角',
            linkSymbol: 'diablo',
            linkUrl: 'http://d.163.com/',
        },
        {
            linkName: 'CodeBay.in',
            linkSymbol: 'codebay',
            linkUrl: 'https://www.codebay.in/',
        },
        {
            linkName: '游侠网',
            linkSymbol: 'ali213',
            linkUrl: 'http://www.ali213.net/',
        },
        {
            linkName: '3DM 论坛',
            linkSymbol: '3dmgame',
            linkUrl: 'http://bbs.3dmgame.com/',
        },
    ],
    frontendLinks: [{
            linkName: 'Codrops',
            linkSymbol: 'codrops',
            linkUrl: 'https://tympanus.net/codrops/',
        },
        {
            linkName: '掘金',
            linkSymbol: 'juejin',
            linkUrl: 'https://juejin.im/',
        },
        {
            linkName: 'W3cplus',
            linkSymbol: 'w3cplus',
            linkUrl: 'https://www.w3cplus.com/',
        },
        {
            linkName: '腾讯 ISUX',
            linkSymbol: 'isux',
            linkUrl: 'https://isux.tencent.com/',
        },
        {
            linkName: '大前端',
            linkSymbol: 'daqianduan',
            linkUrl: 'http://www.daqianduan.com/',
        },
        {
            linkName: 'Microzz',
            linkSymbol: 'microzz',
            linkUrl: 'https://microzz.com/',
        },
        {
            linkName: '技术胖',
            linkSymbol: 'jspang',
            linkUrl: 'http://jspang.com/',
        },
    ],
    cssLinks: [
        {
            linkName: 'UIkit',
            linkSymbol: 'uikit',
            linkUrl: 'https://getuikit.com/',
        },
        {
            linkName: 'Foundation',
            linkSymbol: 'foundation',
            linkUrl: 'https://foundation.zurb.com/',
        },
        {
            linkName: 'Bootstrap',
            linkSymbol: 'bootstrap',
            linkUrl: 'https://getbootstrap.com/',
        },
        {
            linkName: 'Element UI',
            linkSymbol: 'element',
            linkUrl: 'http://element-cn.eleme.io/#/zh-CN',
        },
        {
            linkName: 'Ant Design',
            linkSymbol: 'ant',
            linkUrl: 'https://ant.design/index-cn',
        },
        {
            linkName: 'Tailwind CSS',
            linkSymbol: 'tailwind',
            linkUrl: 'https://tailwindcss.com/',
        },
        {
            linkName: 'CSS Tricks',
            linkSymbol: 'Tricks',
            linkUrl: 'https://l-hammer.github.io/You-need-to-know-css/#/',
        },
        {
            linkName: 'Vital CSS',
            linkSymbol: 'vitalcss',
            linkUrl: 'https://vitalcss.com/',
        },
        {
            linkName: 'Milligram',
            linkSymbol: 'milligram',
            linkUrl: 'https://milligram.io/',
        },
        {
            linkName: 'FontAwesome',
            linkSymbol: 'fontawesome',
            linkUrl: 'https://fontawesome.com/',
        },
        {
            linkName: 'Ionicons',
            linkSymbol: 'ionicons',
            linkUrl: 'http://ionicons.com/',
        },
        {
            linkName: 'Material icons',
            linkSymbol: 'materialicons',
            linkUrl: 'https://material.io/icons/',
        },
    ]
}


const database = {
    menuData,
    linkData,
}

export default database;

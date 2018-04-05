/* @START: 网站数据库
 * @Author: Hewel
 * @Date: 2018-04-04 20:22:57
 * @Last Modified by: Hewel
 * @Last Modified time: 2018-04-05 19:09:33
 */

 //MARK: 标题数据
const menuData = [{
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
        itemName: '前端工具库',
        itemSymbol: 'fronttools',
    },
    {
        itemName: '门户网站',
        itemSymbol: 'portal',
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
//MARK: 各网站数据
const linkData = {
    //MARK: 影视网站
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
    //MARK: 游戏网站
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
            linkName: 'SteamCN',
            linkSymbol: 'steamcn',
            linkUrl: 'https://steamcn.com/',
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
        {
            linkName: '多玩游戏网',
            linkSymbol: 'duowan',
            linkUrl: 'http://www.duowan.com/',
        },
        {
            linkName: '17173 游戏网',
            linkSymbol: '17173',
            linkUrl: 'https://www.17173.com/',
        },
        {
            linkName: '拇指玩',
            linkSymbol: 'muzhiwan',
            linkUrl: 'https://www.muzhiwan.com/',
        },
        {
            linkName: '当乐网',
            linkSymbol: 'dangle',
            linkUrl: 'http://www.d.cn/',
        },
    ],
    //MARK: 前端网站
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
        {
            linkName: 'Needn\'t Jq',
            linkSymbol: 'notneedjq',
            linkUrl: 'http://youmightnotneedjquery.com/',
        },
        {
            linkName: '菜鸟教程',
            linkSymbol: 'runoob',
            linkUrl: 'http://www.runoob.com/',
        },
        {
            linkName: 'WEB 前端开发',
            linkSymbol: 'css88',
            linkUrl: 'http://www.css88.com/',
        },
        {
            linkName: 'ECMAScript 6',
            linkSymbol: 'ecmascript',
            linkUrl: 'http://es6.ruanyifeng.com/',
        },
    ],
    //MARK: 前端工具库
    fronttoolsLinks: [{
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
        {
            linkName: 'Vivify',
            linkSymbol: 'vivify',
            linkUrl: 'http://vivify.mkcreative.cz/',
        },
        {
            linkName: 'Vue.js',
            linkSymbol: 'vuejs',
            linkUrl: 'https://cn.vuejs.org/',
        },
        {
            linkName: 'Electron',
            linkSymbol: 'electronjs',
            linkUrl: 'https://electronjs.org/',
        },
        {
            linkName: '草莓图标库',
            linkSymbol: 'caomeitubiao',
            linkUrl: 'http://chuangzaoshi.com/icon/#',
        },
        {
            linkName: 'Ionic',
            linkSymbol: 'ionic',
            linkUrl: 'https://ionicframework.com/',
        },
        {
            linkName: 'React',
            linkSymbol: 'reactjs',
            linkUrl: 'https://reactjs.org/',
        },
        {
            linkName: 'AngularJs',
            linkSymbol: 'angularjs',
            linkUrl: 'https://angularjs.org/',
        },
        {
            linkName: 'Jquery',
            linkSymbol: 'jquery',
            linkUrl: 'http://jquery.com/',
        },
        {
            linkName: 'Flubber',
            linkSymbol: 'flubber',
            linkUrl: 'https://github.com/veltman/flubber',
        },
        {
            linkName: 'Driver',
            linkSymbol: 'driver',
            linkUrl: 'http://kamranahmed.info/driver',
        },
        {
            linkName: 'Tensorflow',
            linkSymbol: 'tensorflow',
            linkUrl: 'https://js.tensorflow.org/',
        },
        {
            linkName: 'Puppeteer',
            linkSymbol: 'puppeteer',
            linkUrl: 'https://github.com/GoogleChrome/puppeteer?utm_source=gold_browser_extension',
        },
    ],
    portalLinks: [
        {
            linkName: '知乎',
            linkSymbol: 'zhihu',
            linkUrl: 'https://www.zhihu.com/',
        },
        {
            linkName: '掘金',
            linkSymbol: 'juejin',
            linkUrl: 'https://juejin.im/',
        },
        {
            linkName: '简书',
            linkSymbol: 'jianshu',
            linkUrl: 'https://www.jianshu.com/',
        },
        {
            linkName: '开源中国',
            linkSymbol: 'oschina',
            linkUrl: 'https://www.oschina.net/',
        },
        {
            linkName: '少数派',
            linkSymbol: 'sspai',
            linkUrl: 'https://sspai.com/',
        },
        {
            linkName: '小专栏',
            linkSymbol: 'xiaozhuanlan',
            linkUrl: 'https://xiaozhuanlan.com/',
        },
        {
            linkName: '异次元软件',
            linkSymbol: 'iplaysoft',
            linkUrl: 'https://www.iplaysoft.com/',
        },
        {
            linkName: 'IPcfun',
            linkSymbol: 'ipcfun',
            linkUrl: 'https://www.ipcfun.com/',
        },
        {
            linkName: '小众软件',
            linkSymbol: 'appinn',
            linkUrl: 'https://www.appinn.com/',
        },
        {
            linkName: 'ZD423',
            linkSymbol: 'zdfans',
            linkUrl: 'http://www.zdfans.com/',
        },
        {
            linkName: '中关村在线',
            linkSymbol: 'zol',
            linkUrl: 'http://www.zol.com.cn/',
        },
        {
            linkName: '太平洋电脑网',
            linkSymbol: 'pconline',
            linkUrl: 'http://www.pconline.com.cn/',
        },
        {
            linkName: 'ZEALER',
            linkSymbol: 'zealer',
            linkUrl: 'http://www.zealer.com/',
        },
        {
            linkName: '即刻',
            linkSymbol: 'okjike',
            linkUrl: 'https://web.okjike.com/',
        },
        {
            linkName: '网易',
            linkSymbol: 'netsease',
            linkUrl: 'http://www.163.com/',
        },
        {
            linkName: '腾讯',
            linkSymbol: 'qq',
            linkUrl: 'http://www.qq.com/',
        },
        {
            linkName: '老男人',
            linkSymbol: 'laonanren',
            linkUrl: 'https://www.laonanren.com/',
        },
        {
            linkName: '暴走漫画',
            linkSymbol: 'baozoumanhua',
            linkUrl: 'http://baozoumanhua.com/',
        },
        {
            linkName: '今日头条',
            linkSymbol: 'toutiao',
            linkUrl: 'https://www.toutiao.com/',
        },
        {
            linkName: '虎嗅网',
            linkSymbol: 'huxiu',
            linkUrl: 'https://www.huxiu.com/',
        },
        {
            linkName: '凤凰网',
            linkSymbol: 'ifeng',
            linkUrl: 'http://www.ifeng.com/',
        },
        {
            linkName: '天涯社区',
            linkSymbol: 'tianya',
            linkUrl: 'http://www.tianya.cn/',
        },
        {
            linkName: '新浪新闻',
            linkSymbol: 'sina',
            linkUrl: 'http://news.sina.com.cn/',
        },
        {
            linkName: '环球网',
            linkSymbol: 'huanqiu',
            linkUrl: 'http://www.huanqiu.com/',
        },
        {
            linkName: '澎湃新闻',
            linkSymbol: 'thepaper',
            linkUrl: 'http://www.thepaper.cn/',
        },
    ],
    //Mark: 常用网站
    mainLinks: [{
            linkName: '游民星空',
            linkSymbol: 'gamersky',
            linkUrl: 'http://www.gamersky.com/',
        },
        {
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
            linkName: '优酷',
            linkSymbol: 'youku',
            linkUrl: 'http://www.youku.com/',
        },
        {
            linkName: '豆瓣影视',
            linkSymbol: 'douban',
            linkUrl: 'https://movie.douban.com/',
        },
        {
            linkName: '翻托邦字幕组',
            linkSymbol: 'fantopia',
            linkUrl: 'https://fantopia.club/',
        },
        {
            linkName: '3DM 论坛',
            linkSymbol: '3dmgame',
            linkUrl: 'http://bbs.3dmgame.com/',
        },
        {
            linkName: '哔哩哔哩',
            linkSymbol: 'bilibili',
            linkUrl: 'https://www.bilibili.com/',
        },
        {
            linkName: 'Codrops',
            linkSymbol: 'codrops',
            linkUrl: 'https://tympanus.net/codrops/',
        },
    ]
}

const database = {
    menuData,
    linkData,
}

export default database;

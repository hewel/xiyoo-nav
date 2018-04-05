<template lang="pug">
    #main
        .main-box
            h3 {{getTitle(jumpSymbol)}}
            .main-nav
                ul: li(v-for = 'link in linkArr'): x-link(:link-data = 'link')
        .view-box
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Main',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['jumpSymbol', 'linkData']),
        linkArr() {
            return this.linkData[this.jumpSymbol + 'Links'];
        },
    },
    methods: {
        getTitle(symbol) {
            let title = '常用网址';
            if (symbol) {
                switch (symbol) {
                    case 'movie':
                        title = '动画影视';
                        break;
                    case 'game':
                        title = '游戏娱乐';
                        break;
                    case 'frontend':
                        title = '前端设计';
                        break;
                    case 'fronttools':
                        title = '前端工具库';
                        break;
                    case 'portal':
                        title = '新闻门户网站';
                        break;
                    case 'design':
                        title = '设计交互';
                        break;
                    case 'backend':
                        title = '后端开发';
                        break;
                    case 'tools':
                        title = '开发工具';
                        break;
                    default:
                        break;
                }
            }
            return title;
        }
    },
    created() {

    }
}
</script>

<template lang="pug">
    #menu-side: nav.menu-nav
        ul.menu-list
            li.menu-item(
                v-for = '(item, index) in menuData',
                :class = '"js-" + item.itemSymbol',
                @click = 'tipClick(item.itemSymbol, $event)',
                @mouseenter = 'tipHover(item.itemName, $event)',
                @mouseleave = 'tipOver',
            ): i(:class = '"menu-" + item.itemSymbol')
        span( class = 'menu-mark', :style = '{top: markTop + "px"}' )
        span(
            class = 'menu-tip'
            :style = '{top: tipTop + "px"}',
            :class='tipClass',
        ) {{itemName}}
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Menu',
    data() {
        return {
            itemName: '',
            tipTop: 0,
            tipSwitch: false,
            markTop: 0,
        }
    },
    computed: {
        ...mapState(['menuData']),
        tipClass() {
            return this.tipSwitch ? 'show' : 'hidden';
        }
    },
    methods: {
        // ...mapMutations(['activate']),
        async tipHover(name, event) {
            this.itemName = await name;
            this.tipTop = await event.path[0].offsetTop;
            this.tipSwitch = await true;
        },
        tipOver() {
            this.tipSwitch = false;
        },
        async tipClick(symbol, event) {
            await this.$store.commit('activate', symbol);
            this.markTop = await event.path[0].offsetTop;
        }
    },
    created() {

    }
}
</script>

<template lang="pug">
    #menu-side: nav.menu-nav
        ul.menu-list
            li.menu-item(
                v-for = 'item in menuData',
                :class = '"js-" + item.itemSymbol',
                @click = 'activate(item.itemSymbol)'
            )
                i(:class = '"menu-" + item.itemSymbol')
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            menuData: this.$store.state.menuData,
            jumpSymbol: 'main',
        }
    },
    methods: {
        activate(symbol) {
            this.jumpSymbol = symbol;
        },
    },
    created() {
        // this.menuData = dataBase.menuData;
        // console.log(menuData);
    }
}
</script>

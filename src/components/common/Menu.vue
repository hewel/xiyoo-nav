<template lang="pug">
    #menu-side: nav.menu-nav
        .menu-logo
        ul.menu-list
            li.menu-item(v-for = 'item in menuData', :class = '"js-" + item.itemSymbol')
                i(:class = '"menu-" + item.itemSymbol')
</template>

<script>
import dataBase from '@/scripts/database.js';
export default {
    name: 'Menu',
    data() {
        return {
            menuData: [],
        }
    },
    created() {
        let menuData = dataBase.menuData;
        this.menuData = menuData;
        // console.log(menuData);
    }
}
</script>

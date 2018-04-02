<template lang="pug">
    #menu-side: nav.menu-nav
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
        this.menuData = dataBase.menuData;
        // console.log(menuData);
    }
}
</script>

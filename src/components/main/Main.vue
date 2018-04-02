<template lang="pug">
    #main
        .weather
        .main-nav
            ul: li(v-for = 'link in linkArr'): x-link(:link-data = 'link')
</template>

<script>
import dataBase from '@/scripts/database.js';
export default {
    name: 'Main',
    data() {
        return {
            linkArr: [],
            demo: false,
        }
    },
    methods: {

    },
    created() {
        this.linkArr = dataBase.linkData.movieLinks;
    }
}
</script>

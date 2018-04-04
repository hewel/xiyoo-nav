<template lang="pug">
    #main
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
        }
    },
    created() {

    }
}
</script>

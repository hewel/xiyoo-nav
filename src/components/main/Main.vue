<template lang="pug">
    #main
        .weather
        .main-nav
            ul: li(v-for = 'link in linkArr'): x-link(:link-data = 'link')
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            linkArr: [],
        }
    },
    created() {
        this.linkArr = this.$store.state.linkData['movieLinks'];
    }
}
</script>

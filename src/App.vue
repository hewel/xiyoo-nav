<template lang="pug">
  #app
    x-menu
    #content
        router-view
    .content-box
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
    }
</script>

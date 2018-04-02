<template lang="pug">
  #app
    top-bar
    x-menu
    #content
        router-view
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
}
</script>

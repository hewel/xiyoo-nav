<template lang="pug">
    a.nav-link(:href = 'linkData.linkUrl', :title = 'linkData.linkName' target = '_blank')
        i(:class = '"icon-" + linkData.linkSymbol', class='icon')
        span.link-text {{linkData.linkName}}
</template>

<script>
export default {
    props: {
        linkData: {
            type: Object,
            default() {
                return {
                    linkName: 'Default',
                    linkSymbol: 'default',
                    linkUrl: '/',
                }
            }
        }
    }
}
</script>

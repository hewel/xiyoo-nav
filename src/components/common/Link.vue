<template lang="pug">
    a.nav-link(:href = 'linkData.linkHref', :title = 'linkData.linkName')
        i(:class = 'linkData.linkIcon')
        span.link-text {{linkData.linkText}}
</template>

<script>
export default {
    props: {
        linkData: {
            type: Object,
            default() {
                return {
                    linkName: '/',
                    linkHref: '/',
                    linkIcon: 'icon-default',
                    linkText: 'default',
                }
            }
        }
    }
}
</script>

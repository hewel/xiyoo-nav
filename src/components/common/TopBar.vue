<template lang="pug">
    #top-bar
        .bar-logo
            .logo-img(@click = 'gotoMain')
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720"><title>稀釉导航</title><g style="isolation:isolate"><path d="M150.19,540.31h.11l.2-.35h-.1ZM628,480a59.72,59.72,0,0,0-10.34-33.67L412.85,91.58c.35.65.69,1.32,1,2a60,60,0,0,0-108.5,1.62L104,444.06a60,60,0,1,0,100.56,65h.15a180,180,0,0,1,310.69,0h.15A60,60,0,0,0,568,540c.51,0,1,0,1.51,0l.2.34h.11l-.21-.35h-.07A60,60,0,0,0,628,480ZM360,540a60,60,0,1,0,60,60A60,60,0,0,0,360,540Z" style="fill:currentColor;fill-rule:evenodd"/></g></svg>
            span 稀釉导航
            span.hewel Built by
                a(href="https://www.xiyoo.win", title="xiyoo") Hewel
        //- form.bar-searchs
        //-     input.search-form
        //-     button.search-btn
        //- .bar-weather
</template>

<script>
export default {
    name: 'TopBar',
    data() {
        return {}
    },
    methods: {
        async gotoMain() {
            await this.$store.commit('activate', 'main');
            await this.$store.commit('moveMark', 0);
        }
    }
}
</script>

<template lang="pug">
    #main
        .weather
        .main-nav
            .nav-bar
            ul: li(v-for = 'link in linkArr'): x-link
</template>

<script>
export default {
    data() {
        return {
            linkArr: new Array(1000),
            demo: false,
        }
    },
    methods: {
        isScrollEnd() {
            let el = document.documentElement,
                block = false;
            const printNumber = () => {
                block = el.scrollTop + el.clientHeight +1 >= el.scrollHeight ? true : false;
                console.log(block);
                this.demo = block;
                // console.log(parseInt(el.scrollTop+1));
                // console.log(el.clientHeight);
                // console.log(el.scrollHeight);
            }
            document.addEventListener('scroll', _.debounce(printNumber, 200));
            document.addEventListener('wheel', _.throttle(e => {
                console.log(e);
            }, 2000));
        }
    },
    created() {
        this.isScrollEnd();
    }
}
</script>

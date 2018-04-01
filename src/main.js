// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import _ from 'lodash';
import PerfectScrollbar from 'perfect-scrollbar';
import Menu from './components/common/Menu';
import Link from './components/common/Link';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.component('x-menu', Menu);
Vue.component('x-link', Link);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});

const contentEl = document.getElementById('content');
const pScrollBar = new PerfectScrollbar(contentEl, {
    suppressScrollX: true,
});
contentEl.addEventListener('ps-scroll-y', _.debounce(() => {
    console.log(pScrollBar.reach.y);
}, 500));

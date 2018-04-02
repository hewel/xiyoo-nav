import Vue from 'vue';
import Vuex from 'vuex';
import database from './database.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuData: database.menuData,
        linkData: database.linkData,
    }
});

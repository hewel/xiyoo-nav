import Vue from 'vue';
import Vuex from 'vuex';
import database from './database.js';

Vue.use(Vuex);

const state = {
    menuData: database.menuData,
    linkData: database.linkData,
    jumpSymbol: 'main',
};
const mutations = {
    activate(state, symbol) {
        state.jumpSymbol = symbol;
    },
};

export default new Vuex.Store({state, mutations});

import Vue from 'vue';
import Vuex from 'vuex';
import database from './database.js';

Vue.use(Vuex);

const state = {
    menuData: database.menuData,
    linkData: database.linkData,
    jumpSymbol: 'main',
    markTop: '0',
};
const mutations = {
    activate(state, symbol) {
        state.jumpSymbol = symbol;
    },
    moveMark(state, top) {
        state.markTop = top;
    }
};

export default new Vuex.Store({state, mutations});

import {createStore} from 'vuex'

export default createStore({
    state: {
        counter: 0
    },

    mutations: {
        increment(state) {
            state.counter++
        }
    },

    actions: {
        increment({commit}) {
            commit('increment');
        }
    },

    getters: {
        counter(state) {
            return state.counter;
        }
    },

    modules: {}
})

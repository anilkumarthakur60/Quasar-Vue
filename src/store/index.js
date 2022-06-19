import { createStore } from 'vuex'

import counterModule from '@/store/modules/counter.module'

export default createStore({
    state: {
        counterState: counterModule.state
    },
    mutations: {},
    actions: {},
    modules: {
        counterModule
    },
    getters: {
        getCounterState(state) {
            return state.counterState.counter
        }
    }
})
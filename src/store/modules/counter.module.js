export default {
    namespaced: true,
    state: {

        counter: {
            count: 55
        }
    },
    mutations: {
        INCREMENT_COUNTER(state) {

            state.counter.count += 1
        },
        DECREMENT_COUNTER(state) {
            state.counter.count -= 1

        },
        INCREMEN_COUNTER_BY(state, paylord) {
            console.log('paylord', paylord)
            state.counter.count += paylord.value

        },
    },
    getters: {

    },
    actions: {

        incrementCounter({ commit }) {
            return commit('INCREMENT_COUNTER');
        },
        decrementCounter({ commit }) {
            return commit('DECREMENT_COUNTER');
        },
        incrementCounterBy({ commit }, paylord) {
            return commit('INCREMEN_COUNTER_BY', paylord)
        }

    }
}
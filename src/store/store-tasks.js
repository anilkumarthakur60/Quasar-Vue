const state = {
    tasks: [{
            id: 1,
            name: "asdfgh",
            dueDate: "2019/05/12",
            dueTime: "18:30",
            completed: true,
        },
        {
            id: 2,
            name: "ertyui",
            dueDate: "2019/05/12",
            dueTime: "18:30",
            completed: false,
        },
        {
            id: 3,
            name: "ploiuytfd",
            dueDate: "2019/05/12",
            dueTime: "18:30",
            completed: true,
        },
        {
            id: 4,
            name: "poiuyfguhijlkm",
            dueDate: "2019/05/12",
            dueTime: "18:30",
            completed: false,
        },
    ],
}
const getters = {
    tasks: (state) => {
        return state.tasks;
    }
}
const actions = {}
const mutations = {}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
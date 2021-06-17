import axios from "axios";

const state = {
    branches: [],
    commits: []
}

const getters = {
    allBranches: state => state.branches,
    allCommits: state => state.commits
}

const actions = {
    async getBranches({commit}, repo) {
        try {
            const {data} = await axios.get(`https://api.github.com/repos/Inza/${repo}/branches`)
            console.log(data)
            commit("setBranches", data)
        } catch (e) {
            console.log(e)
        }
    },

    async getCommits({commit}, repo) {
        try {
            const {data} = await axios.get(`https://api.github.com/repos/Inza/${repo}/commits`)
            console.log(data)
            commit("setCommits", data)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
    setBranches: (state, payload) => state.branches = payload,
    setCommits: (state, payload) => state.commits = payload
}

export default {
    state,
    getters,
    actions,
    mutations
};
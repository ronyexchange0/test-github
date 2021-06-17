import axios from "axios";

const state = {
    repos: []
}

const getters = {
    allRepos: state => state.repos
}

const actions = {
    async getRepos({commit}) {
        try {
            const {data} = await axios.get("https://api.github.com/users/inza/repos")
            commit("setRepos", data)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
    setRepos: (state, payload) => state.repos = payload
}

export default {
    state,
    getters,
    actions,
    mutations
};
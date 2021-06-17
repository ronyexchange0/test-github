import axios from "axios";

const state = {
    user: {
        name: "",
        bio: "",
        image: "",
        login: "",
    }
}

const getters = {
    user: state => state.user
}

const actions = {
    async getUser({commit}) {
        try {
            const {data} = await axios.get("https://api.github.com/users/inza")
            commit("setUser", data)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
    setUser: (state, payload) => {
        state.user.name = payload.name
        state.user.bio = payload.bio
        state.user.avatar = payload.avatar_url
        state.user.login = payload.login
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};
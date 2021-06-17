import repos from './modules/repos';
import user from './modules/user';
import repoDetails from './modules/repoDetails';
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  modules: {
    repos,
    user,
    repoDetails
  }
})


export default store
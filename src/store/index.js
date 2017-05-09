import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projects from './modules/project'

export default new Vuex.Store({
    modules: {
        projects: projects
    }
})
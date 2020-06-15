export const state = () => ({
  user: {
    nid: '',
    subId: '',
    picture: '',
    name: ''
  },
  isAdmin: false
})

export const getters = {
  getUser (state) {
    return state.user
  },
  subId (state) {
    return state.user.sub_id
  },
  picture (state) {
    return state.user.picture
  },
  name (state) {
    return state.user.name
  },
  getIsAdmin (state) {
    return state.isAdmin
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setAdmin (state) {
    state.isAdmin = true
  }
}

export const actions = {
  setUser ({ commit }, userObj) {
    commit('setUser', userObj)
  },
  setAdmin ( { commit }) {
    commit('setAdmin')
  }
}

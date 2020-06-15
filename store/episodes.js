import { getAllEpisodesBySeriesPath } from '~/assets/js/api'

export const state = () => ({
  ep: []
})

export const getters = {
  getEp (state) {
    return state.ep
  }
}

export const mutations = {
  setEp (state, payload) {
    state.ep = payload
    return state.ep
  },
  setDialog (state, payload) {
    state.showDialog = payload
  }
}

export const actions = {
  async setEp ({ commit }, path) {
    const episodes = await getAllEpisodesBySeriesPath(path)
    commit('setEp', episodes)
  },
  async setEpWithData({ commit }, data) {
    commit('setEp', data)
  }
}

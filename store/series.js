
export const state = () => ({
  serie: {
    nid: ''
  },
  title: ''
})

export const mutations = {
  setSerie (state, payload) {
    state.serie = payload
  },
  setTitle (state, payload) {
    state.title = payload
  }
}

export const actions = {
  async setSerie ({ commit }, serie) {
    // const serie = await getSerieByPath(path)
    commit('setSerie', serie)
  }
}

export const getters = {
  getSerie (state) {
    return state.serie
  },
  getNid (state) {
    return state.serie.nid
  }
}

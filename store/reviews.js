
export const state = () => ({
  review: null,
  likeReview: [],
  likeReply: []
})

export const getters = {
  getReview (state) {
    return state.review
  },
  likeReview (state) {
    return state.likeReview
  },
  likeReply (state) {
    return state.likeReply
  }
}

export const mutations = {
  setReview (state, payload) {
    state.review = payload
  },
  setLikeReview (state, payload) {
    state.likeReview = []
    for (let i=0;i<payload.length;i++) {
      state.likeReview.push(payload[i].review_like)
    }
  },
  setLikeReply (state, payload) {
    state.likeReply = []
    for (let i=0;i<payload.length;i++) {
      state.likeReply.push(payload[i].reply_like)
    }
  }
}

export const actions = {
  setReview ({ commit }, review) {
    commit('setReview', review)
  },
  setIpLike ({ commit }, likeReview) {
    commit('setLikeReview', likeReview)
  },
  setReplyLike ( {commit }, likeReply) {
    commit('setLikeReply', likeReply)
  }
}

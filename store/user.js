export const ACTIONS = {
  LOGIN_METHOD: 'user/login',
}

export const state = () => ({
  isLoged: false,
})

export const mutations = {
  LOGIN: (state, data) => state.isLoged = true,
}

export const actions = {
  login({ commit }, data) {
    commit('LOGIN', data)
  },
}
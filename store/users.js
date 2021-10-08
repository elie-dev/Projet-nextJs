export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  DELETE_USER_METHOD: 'users/deleteUser',
  LOGIN_METHOD: 'users/login',
  LOOUT_METHOD: 'users/logout'
}

export const state = () => ({
  users: [],
  isLoged: false,
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  DELETE_USER: (state, data) =>  {
    const index = state.users.findIndex(element => element.email = data)
    state.users.splice(index)
  },
  LOGIN: (state, data) => state.isLoged = true,
  LOGOUT: (state, data) => state.isLoged = false,
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },

  deleteUser({ commit }, data) {
    commit('DELETE_USER', data)
  },

  login({ commit }, data) {
    commit('LOGIN', data)
  },
  logout({ commit }, data) {
    commit('LOGOUT', data)
  },
}

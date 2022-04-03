import { defineStore } from 'pinia'

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({ 
        user: null,
        isAuthenticated: false,
        token: null,
    }),
    getters: {
        userData: (state) => {
            return state.user
        }
    },

    actions: {
        loggedIn({commit}) {
            commit('setIsAuthenticated', this.isAuthenticated)
            commit('setUser', this.user)
            commit('setToken', this.token)
        },

        logout({ commit }) {
            commit('setIsAuthenticated', false)
            commit('setUser', null)
            commit('setToken', null)
        }
    },
})

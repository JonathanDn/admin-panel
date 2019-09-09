export const AUTH_MODULE_NAME = 'auth'

export const AUTH_STATE = {
  USER: 'USER',
  REFRESH_TOKEN_CALL: 'REFRESH_TOKEN_CALL'
}

export const AUTH_ACTIONS = {
  LOGIN: 'LOGIN',
  FETCH_USER: 'FETCH_USER',
  LOGOUT: 'LOGOUT',
  REFRESH_TOKEN: 'REFRESH_TOKEN'
}

export const AUTH_MUTATIONS = {
  SET_USER: 'SET_USER',
  SET_REFRESH_TOKEN_CALL: 'SET_REFRESH_TOKEN_CALL'
}

export const AUTH_GETTERS = {
  IS_ADMIN: 'IS_ADMIN',
}
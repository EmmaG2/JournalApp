import { createSlice } from '@reduxjs/toolkit'
import { AUTH_STATUS } from './authStatus'

const initialState = {
  status: AUTH_STATUS.notAuthenticated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = AUTH_STATUS.authenticaded
      state.uid = action.payload.uid
      state.email = action.payload.email
      state.displayName = action.payload.displayName
      state.photoURL = action.payload.photoURL
      state.errorMessage = null
    },
    logout: (state, action) => {
      initialState
      state.errorMessage = action.payload.errorMessage
    },
    checkingCredentials: (state) => {
      state.status = AUTH_STATUS.checking
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions

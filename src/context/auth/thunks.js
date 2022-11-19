import { signInWithGoogle } from '../../firebase'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = ({ email, pass }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const res = await signInWithGoogle()

    if (!res.ok) return dispatch(logout(res.errorMessage))

    dispatch(login(res))
  }
}

export const registerUserWithEmailAndPass = ({ name, password, fullname }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials)

    const resp = await registerUserWithEmailAndPass({
      name,
      password,
      fullname,
    })

    console.log(resp)
  }
}

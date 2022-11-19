import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks'
import { Box } from '@mui/system'
import { checkingAuthentication, startGoogleSignIn } from '../../context/auth'

export const FormComponent = ({ isRegister = true }) => {
  let formData
  let formValidations

  const MIN_PASS_LENGTH = 12
  const MIN_NAME_LENGTH = 2

  if (isRegister) {
    formData = {
      email: '',
      password: '',
      fullName: '',
    }
  } else {
    formData = {
      email: '',
      password: '',
    }
  }

  if (isRegister) {
    formValidations = {
      email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
      password: [
        (pass) => pass.length >= MIN_PASS_LENGTH,
        `La contraseña debe de tener mas de ${MIN_PASS_LENGTH} letras`,
      ],
      fullName: [
        (name) => name.length >= MIN_NAME_LENGTH,
        `El nombre debe de tener mas de ${MIN_NAME_LENGTH} letras`,
      ],
    }
  } else {
    formValidations = {
      email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
      password: [
        (pass) => pass.length >= MIN_PASS_LENGTH,
        `La contraseña debe de tener mas de ${MIN_PASS_LENGTH} letras`,
      ],
    }
  }

  const {
    passwordValid,
    emailValid,
    fullNameValid,
    fullName,
    email,
    password,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations)

  const { status } = useSelector((state) => state.auth)
  const isAuthenticated = useMemo(() => status === 'checking', [status])

  const [formSubmited, setFormSubmited] = useState(false)

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    setFormSubmited(true)

    if (!isFormValid) return

    dispatch(
      checkingAuthentication({
        email,
        password,
      }),
    )
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <Box>
      <Typography
        component='h2'
        variant='h6'
        sx={{
          ml: 1,
        }}>
        Formulario:
        <Typography
          component='span'
          variant='h6'
          sx={{
            ml: 1,
            color: isFormValid ? '#000' : 'error.main',
          }}>
          {isFormValid ? 'Valido' : 'Incorrecto'}
        </Typography>
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container>
          {isRegister && (
            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
              <TextField
                label='Nombre completo'
                type='texto'
                placeholder='Jhon Doe'
                fullWidth
                name='fullName'
                value={fullName}
                onChange={onInputChange}
                sx={{ mb: 1 }}
                error={!!fullNameValid && formSubmited}
                helperText={fullNameValid}
              />
            </Grid>
          )}

          <Grid item xs={12} md={6} sx={{ padding: 1 }}>
            <TextField
              label='correo'
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
              name='email'
              value={email}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
              onChange={onInputChange}
              sx={{ mb: 1 }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ padding: 1 }}>
            <TextField
              label='password'
              type='password'
              placeholder='1q2w3e4r5t6y'
              name='password'
              value={password}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
              onChange={onInputChange}
              fullWidth
              sx={{ mb: 1 }}
            />
          </Grid>

          <Grid container spacing={2} st={{ mb: 2, mt: 1 }}>
            <Grid xs={12} sm={6} item>
              <Button
                disabled={isAuthenticated || !isFormValid}
                type='submit'
                fullWidth
                variant='contained'>
                <Typography sx={{ ml: 1, mt: 0.4 }}>
                  {isRegister ? 'Register' : 'Login'}
                </Typography>
              </Button>
            </Grid>
            <Grid xs={12} sm={6} item>
              <Button
                disabled={isAuthenticated && formSubmited}
                onClick={onGoogleSignIn}
                fullWidth
                variant='contained'>
                <Google />
                <Typography sx={{ ml: 1, mt: 0.4 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

import { Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const LoginAccountLink = () => {
  return (
    <Grid container direction='row' justifyContent={'end'}>
      <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta? </Typography>
      <Link component={RouterLink} color='inherit' to='/auth/login'>
        Ingresar
      </Link>
    </Grid>
  )
}

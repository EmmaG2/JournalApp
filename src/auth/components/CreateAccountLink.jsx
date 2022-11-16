import { Grid, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const CreateAccountLink = () => {
  return (
    <Grid container direction='row' justifyContent={'end'}>
      <Link component={RouterLink} color='inherit' to='/auth/register'>
        Crear una cuenta
      </Link>
    </Grid>
  )
}

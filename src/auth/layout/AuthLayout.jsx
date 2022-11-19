import { Grid, Typography } from '@mui/material'
import { CreateAccountLink, LoginAccountLink } from '../components'

export const AuthLayout = ({
  children: form,
  title = '',
  isRegister = true,
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: '1em',
      }}>
      <Grid
        item
        className='box--shadow'
        xs={3}
        sx={{
          width: { md: '42rem' },
          backgroundColor: 'white',
          padding: '1em',
          borderRadius: 2,
        }}>
        <Typography
          variant='h1'
          fontSize={'clamp(1.69375rem, 18.7895px + 1.39803vw,2.125rem)'}
          sx={{
            mb: 1,
            textAlign: 'center',
          }}>
          {title}
        </Typography>

        {form}

        {!isRegister ? <CreateAccountLink /> : <LoginAccountLink />}
      </Grid>
    </Grid>
  )
}

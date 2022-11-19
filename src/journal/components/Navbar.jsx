import { LoginOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useRouteNavigation } from '../../hooks'

export const Navbar = ({ drawerWidth = 240 }) => {
  const { onLogout } = useRouteNavigation()

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}>
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction={'row'}
          justifyContent='space-between'
          alignItems='center'>
          <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
            Journal App
          </Typography>
          <IconButton onClick={() => onLogout()} color='error'>
            <LoginOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

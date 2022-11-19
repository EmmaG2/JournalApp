import { TurnedInNot } from '@mui/icons-material'
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component={'nav'}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        transform: {
          xs: `translateX(-${drawerWidth}px)`,
          sm: 'translateX(0)',
        },
      }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          // transform: {
          //   xs: `translateX(-${drawerWidth}px)`,
          //   sm: 'translateX(0)',
          // },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
        <Toolbar>
          <Typography variant='h6' noWrap componnt='h1'>
            Emma ❤
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {days
            .map(
              (month) =>
                month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(),
            )
            .map((month, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container>
                    <ListItemText
                      primary={month}
                      secondary={'Lorem Ipsum Dolor Sit Asimet'}></ListItemText>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Drawer>
    </Box>
  )
}

const days = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

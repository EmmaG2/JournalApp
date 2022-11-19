// import { Typography } from "@mui/material";
import { AddOutlined } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { JournalLayout } from '../layout'
import { NoteView, NothingSelected } from '../views'

export const Journal = () => {
  return (
    <JournalLayout>
      {/* <NothingSelected /> */}

      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: '#fff',
          backgroundColor: 'error.main',
          position: 'fixed',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9,
          },
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}

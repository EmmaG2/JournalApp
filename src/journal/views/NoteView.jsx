import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { ImageGallery, NoteFormulary } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      sc={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} sx={{ FontFace: "ligth" }}>
          5 de Noviembre del 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained">
          <SaveOutlined sx={{ mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <NoteFormulary />
      <ImageGallery />
    </Grid>
  );
};

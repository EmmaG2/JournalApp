import { Grid, TextField } from "@mui/material";

export const NoteFormulary = () => {
  return (
    <Grid container sx={{ mt: 1 }}>
      <TextField
        type={"text"}
        variant="filled"
        fullWidth
        placeholder="ingrese un tituilo"
        label="Titulo"
        sx={{ border: "none", mb: 1 }}
      />
      <TextField
        type={"text"}
        variant="filled"
        fullWidth
        multiline
        placeholder="¿Qué sucedió hoy?"
        label="Anécdota"
        minRows={5}
        sx={{ border: "none", mb: 1 }}
      />
    </Grid>
  );
};

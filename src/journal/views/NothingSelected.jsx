import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelected = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "calc(100vh - 10rem)",
        backgroundColor: "primary.main",
        width: "100%",
        borderRadius: "7px",
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ color: "#fff" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="#fff" variant="h5">
          Seleccion o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};

import { Grid, TextField, Typography } from "@mui/material";

export const Login = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: "1em",
      }}
    >
      <Grid
        item
        className="box--shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: "1em", borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1, textAlign: "center" }}>
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                sx={{ mb: 1 }}
              />
            </Grid>

            <Grid item xs={12} md={6} sx={{ padding: 1 }}>
              <TextField
                label="password"
                type="password"
                placeholder="1q2w3e4r5t6y"
                fullWidth
                sx={{ mb: 1 }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

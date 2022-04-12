import { Box, Paper, Typography } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { styled } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MintContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  boxShadow: 3,
  width: "80%",
  height: "80%",
  top: "8%",
  left: "10%",
  padding: "2%",
}));

function Mint() {
  return (
    <MintContainer>
      <Box>
        <Typography variant="h5">Create</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {/* photo input area */}
        <Box
          sx={{
            flex: "1 1",
            background: "lightgray",
            borderRadius: "1%",
            width: "50%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 5px 10px 1px lightgray",
            "& .MuiSvgIcon-root": {
              color: "white",
              fontSize: "5rem",
            },
          }}
        >
          <PhotoCamera color="white" />
        </Box>
        {/* Text input area */}
        <Box
          sx={{
            margin: "1%",
            width: "50%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            "& .MuiButton-root": {
              background: "8ea8db",
            },
          }}
        >
          <TextField
            id="standard-basic"
            label="Collection Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Link" variant="standard" />
          <TextField id="standard-basic" label="Explane" variant="standard" />
          <Button variant="contained">Create</Button>
        </Box>
      </Box>
    </MintContainer>
  );
}

export default Mint;

import { Box, Paper, Typography } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { styled } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
// import { NFTStorage, File } from "nft.storage";
// import mime from "mime";
// import fs from "fs";
// import path from "path";
// const NFT_STORAGE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEMyMEIwNEZmRDhBZjBEN2JhQTE2YzUyYTY3ZTlkQzFjM0RDMTBCMDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0OTgxNDgzNjQ4MCwibmFtZSI6IldoYWxlIn0.LyOkwlsuhGW6_e4SZz62fS4-E9KCxHmFxGL1MPer_JM";

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
  const [photo, setPhoto] = useState(null);
  // async function storeNFT(imagePath, name, description) {
  //   const image = await fileFromPath(imagePath);
  //   const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });
  //   return nftstorage.store({
  //     image,
  //     name,
  //     description,
  //   });
  // }
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
          <input type="file" name="file" onChange={null} />
          {/* <PhotoCamera color="white" onClick={null} /> */}
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

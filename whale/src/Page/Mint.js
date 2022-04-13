import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { NFTStorage, File } from "nft.storage";
import { NFT_STORAGE_KEY } from "../config";
import HappyKongz from "../images/HappyKongz.png";
import { create } from "ipfs-http-client";

// config 등록 후 gitignore 등록
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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, updateFileUrl] = useState(``);
  const [NFTurl, updateNFTurl] = useState(``);
  const client = create("https://ipfs.infura.io:5001/api/v0");

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateFileUrl(url);
      console.log(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    console.log(name);
    console.log(description);
  }, [name, description]);

  async function storeNFT() {
    let metadata = {
      name: name,
      description: description,
      image: fileUrl,
    };

    metadata = JSON.stringify(metadata);

    try {
      const added = await client.add(metadata);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      updateNFTurl(url);
      console.log(url);
    } catch (e) {
      console.log(e);
    }
    // const metadata = await client.add({
    //   name: name,
    //   description: description,
    //   image: new File([HappyKongz], photo.name, {
    //     type: photo.type,
    //   }),
    // });
    // console.log(metadata);
    // console.log(metadata.url);
    // try {
    //   const added = await client.add(file);
    //   const url = `https://ipfs.infura.io/ipfs/${added.path}`;
    //   updateFileUrl(url);
    //   console.log(url);
    // } catch (error) {
    //   console.log("Error uploading file: ", error);
    // }
  }
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
          <input type="file" name="file" onChange={onChange} />
          {/* <PhotoCamera color="white" onClick={null} /> */}
          <img src={fileUrl} alt="NFTimage" />
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
            onChange={handleName}
          />
          <TextField id="standard-basic" label="Link" variant="standard" />
          <TextField
            id="standard-basic"
            label="Explane"
            variant="standard"
            onChange={handleDescription}
          />
          <Button variant="contained" onClick={storeNFT}>
            Create
          </Button>
        </Box>
      </Box>
    </MintContainer>
  );
}

export default Mint;

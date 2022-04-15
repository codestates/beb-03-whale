import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { create } from "ipfs-http-client";
import nftABI from "../abi/WhaleNFT.json";

const Contract = require("web3-eth-contract");

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

function Mint({ curAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, updateFileUrl] = useState(``);
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
      // console.log(url);
      mintNFT(url);
    } catch (e) {
      console.log(e);
    }
  }
  async function mintNFT(nfturl) {
    try {
      console.log(nfturl);
      const abi = nftABI;
      const address = "0xe23E30b939a085a2d92f50C803F574c58912162B";
      Contract.setProvider(
        "https://ropsten.infura.io/v3/6df37bdfbb1e4dcd8db19ac839911a1b"
      );
      window.contract = new Contract(abi, address);
      const transactionParameters = {
        to: address, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods.mintNFTMyself(nfturl).encodeABI(), //make call to NFT smart contract
      };
      //sign transaction via Metamask
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        return {
          success: true,
          status:
            "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
            txHash,
        };
      } catch (error) {
        return {
          success: false,
          status: "😥 Something went wrong: " + error.message,
        };
      }
    } catch (e) {
      console.log(e);
    }
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
            "& .NFTimg": {
              width: "100%",
              height: "100%",
              borderRadius: "1%",
            },
          }}
        >
          <input type="file" name="file" onChange={onChange} />
          <img src={fileUrl} alt="NFTimage" className="NFTimg" />
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

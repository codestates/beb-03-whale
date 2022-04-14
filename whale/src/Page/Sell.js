import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import EthereumLogo from "../images/Ethereum_logo.png";
import HappyKongz from "../images/HappyKongz.png";
import TextField from "@mui/material/TextField";
// 컨트랙트 실행 정보
import transferABI from "../abi/TransferWhaleNFT.json";
import nftABI from "../abi/WhaleNFT.json";
// const transferWhaleNFTAddress = "0xCe82f91dbC157F2f1bDC467c1BAfe97aAfc1F85c";
// const whaleNFTAddress = "0xe23E30b939a085a2d92f50C803F574c58912162B";
import { transferWhaleNFTAddress, whaleNFTAddress } from "../abi/Address";

const Contract = require("web3-eth-contract");

//for test
const myTokenId = 1;

const SellContainer = styled(Paper)(({ theme }) => ({
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

async function contractRoomInfo() {
  try {
    Contract.setProvider(
      "https://ropsten.infura.io/v3/6df37bdfbb1e4dcd8db19ac839911a1b"
    ); // infura
    const contract = new Contract(transferABI, transferWhaleNFTAddress);
    const result = await contract.methods.roomInfo(0).call();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function sell() {
  // approve
  try {
    Contract.setProvider(
      "https://ropsten.infura.io/v3/6df37bdfbb1e4dcd8db19ac839911a1b"
    ); // infura
    const contract = new Contract(nftABI, whaleNFTAddress);
    const transactionParameters = {
      to: whaleNFTAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .approve(transferWhaleNFTAddress)
        .encodeABI(), //make call to NFT smart contract
    };
    const txHash = await window.ethereum.request({
      mehtod: "eth_sendTransaction",
      params: [transactionParameters],
    });

    // 서버에 (txHash, nftContract주소, tokenId ,원하는가격) 을 post

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
}

function Sell() {
  return (
    <SellContainer>
      <Box>
        <Typography variant="h5">Sell</Typography>
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
            borderRadius: "10%",
            width: "50%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: { EthereumLogo },
            boxShadow: "0 5px 10px 1px lightgray",
            "& .SellImage": {
              width: "100%",
              height: "100%",
              borderRadius: "10%",
            },
          }}
        >
          <img alt="sell NFT" src={HappyKongz} className="SellImage"></img>
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
            "& .MuiTypography-h5": {
              color: "lightgray",
            },
          }}
        >
          <Box>
            <Typography variant="h3">Collection Title</Typography>
            <Typography variant="h5">owned by 0x00..00</Typography>
          </Box>
          {/* 외곽선 있는 박스 */}
          <Box
            sx={{
              width: "100%",
              height: "20%",
              border: "solid lightgray 0.1px",
              borderRadius: "10px",
              boxShadow: "0 5px 10px 1px lightgray",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "2%",
            }}
          >
            {/* 로고+가격 컨테이너 */}
            <Box
              sx={{
                display: "flex",
                // flexDirection: "cloumn",
                justifyContent: "space-evenly",
              }}
            >
              {/* 이더리움 로고 */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "27px",
                  height: "40px",
                  padding: "1%",
                  margin: "1%",
                  "& .Eth": {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <img alt="ETh logo" src={EthereumLogo} className="Eth"></img>
              </Box>

              {/* 가격 */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Price"
                  variant="standard"
                />
              </Box>
            </Box>
            <Button variant="contained" onClick={contractRoomInfo}>
              Sell
            </Button>
          </Box>
          <Typography variant="h6" align="center">
            This is just sample.<br></br>
            If you wanna sell your NFT, <br />
            Click above button.
            <br />
            Enjoy ! <br />
            ___________
          </Typography>
        </Box>
      </Box>
    </SellContainer>
  );
}

export default Sell;

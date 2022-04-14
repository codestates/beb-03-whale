import { Box, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Profile from "../Component/profile";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const MypageContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
}));

function MyPage({ mypageNfts }) {
  // console.log(mypageNfts);
  return (
    <MypageContainer>
      {/* 맨 뒷 배경 */}
      <Box
        sx={{
          background: "lightgray",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Profile />
        {/* 하얀 배경 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: "20%",
            width: "100%",
            height: "100%",
            background: "white",
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              position: "absolute",
              width: "80%",
              height: "120%",
              justifyContent: "center",
              top: "10%",
              right: "10%",
              left: "10%",
            }}
          >
            <ImageList
              sx={{
                width: "80%",
                height: 800,
                "& .MuiImageListItem-img": {
                  width: "100%",
                  height: "100%",
                  borderRadius: "10%",
                  boxShadow: "0 5px 10px 1px lightgray",
                },
              }}
            >
              {mypageNfts.map((item) => (
                <ImageListItem key={item.token_id}>
                  <img
                    src={`${item.image_link}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    link={`/buy/${item.token_id}`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={<span> {item.description}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </MypageContainer>
  );
}

export default MyPage;

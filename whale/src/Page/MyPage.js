import { Box, Paper, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import CollectionContainer from "../Component/collectionContainer";
import Profile from "../Component/profile";

// TODO : scroll

const MypageContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
}));

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MyPage() {
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
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              position: "fixed",
              width: "80%",
              height: "100%",
              justifyContent: "center",
              top: "35%",
              right: "10%",
              left: "10%",
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Item>
                    <CollectionContainer />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </MypageContainer>
  );
}

export default MyPage;

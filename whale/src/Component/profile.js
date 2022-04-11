import React from "react";
import { Box, Container, Typography } from "@material-ui/core/";
import { styled } from "@material-ui/core/styles";
// Mypage 프로필
const Profile = () => {
  const ProfileContainer = styled(Container)(({ theme }) => ({
    position: "absolute",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    height: "20%",
    top: "13%",
    zIndex: 100,
  }));
  return (
    <ProfileContainer>
      <Box
        sx={{
          boxShadow: "0 5px 10px 1px lightgray",
          border: "solid 0.3rem lightgray",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "linear-gradient(217deg, rgba(255,0,0),rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255), rgba(255,255,255) 70.71%)",
        }}
      />
      <Typography variant="h5">Undefined</Typography>
      <Typography variant="body1">0x00..0</Typography>
    </ProfileContainer>
  );
};

export default Profile;

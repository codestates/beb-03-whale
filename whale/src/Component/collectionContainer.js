import React from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import HappyKongz from "../images/HappyKongz.png";
import { Typography } from "@material-ui/core";

const CollectionContainer = () => {
  function clickEvent() {
    console.log("cliked!");
  }
  return (
    <Box
      onClick={clickEvent}
      sx={{
        boxShadow: "0 5px 10px 1px lightgray",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "10%",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        "& .MuiCardMedia-root": {
          borderRadius: "10% 10% 0 0",
        },
      }}
    >
<<<<<<< HEAD
      <CardMedia component="img" height="350" image={HappyKongz} alt="happy kongz" />
=======
      <CardMedia
        component="img"
        height="350"
        image={HappyKongz}
        alt="happy kongz"
      />
>>>>>>> 8e17f89c26db7c402d7b7e69d6a1e7aee7768c14
      <Typography variant="h4">Happy Kongz</Typography>
      <Typography variant="body1">This is sample </Typography>
    </Box>
  );
};

export default CollectionContainer;

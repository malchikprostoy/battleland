import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import open from "../../assets/images/openType.png";

const Opentype = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "160px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#343434",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: {
              xl: "33px 0 0 33px",
              lg: "33px 33px 0 0",
              md: "33px 33px 0 0",
              sm: "33px 33px 0 0",
              xs: "33px 33px 0 0",
            },
            gap: "37px",
            width: { md: "620px", sm: "620px", xs: "500px" },
            height: "453px",
            paddingLeft: "74px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "52px",
              lineHeight: "62px",
              color: "#fff",
              width: "487px",
            }}
          >
            OpenType features and Variable fonts
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4452FE", width: "235px", height: "52px" }}
          >
            Try For Free
          </Button>
        </Box>
        <Box>
          <Avatar
            alt="opentype"
            src={open}
            variant="rounded"
            sx={{
              width: { md: "620px", sm: "620px", xs: "500px" },
              height: "453px",
              borderRadius: {
                xl: "0 33px 33px 0",
                lg: "0 0 33px 33px",
                md: "0 0 33px 33px",
                sm: "0 0 33px 33px",
                xs: "0 0 33px 33px",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Opentype;

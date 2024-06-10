import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import open from "../../assets/images/openType.png";

const Opentype = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "160px",
        flexWrap: "wrap",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#343434",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          justifyContent: "center",
          borderRadius: {
            xl: "33px 0 0 33px",
            lg: "33px 33px 0 0",
            md: "33px 33px 0 0",
            sm: "33px 33px 0 0",
            xs: "33px 33px 0 0",
          },
          gap: "37px",
          width: {
            xl: "620px",
            lg: "620px",
            md: "620px",
            sm: "620px",
            xs: "100%",
          },
          height: "453px",
          p: {
            xs: 2,
            md: "74px",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "52px",
            },
            lineHeight: {
              xs: "42px",
              sm: "50px",
              md: "62px",
            },
            color: "#fff",
            width: {
              xs: "100%",
              md: "487px",
            },
          }}
        >
          OpenType features and Variable fonts
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4452FE",
            width: {
              xs: "100%",
              sm: "200px",
              md: "235px",
            },
            height: "52px",
          }}
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
            width: {
              xl: "620px",
              lg: "620px",
              md: "620px",
              sm: "620px",
              xs: "100%",
            },
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
  );
};

export default Opentype;

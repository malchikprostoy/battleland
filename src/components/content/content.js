import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import pc from "../../assets/images/Macbook Pro.png";
import free from "../../assets/images/Boards Notifications.png";

const Content = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "44px",
          marginTop: "160px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "52px",
              lineHeight: "62px",
              fontWeight: "400",
            }}
          >
            Contents
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "400",
              whiteSpace: "pre-wrap",
            }}
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "33px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              padding: "40px 35px",
              flexWrap: "wrap",
              background: "#fff",
            }}
            variant="outlined"
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Work
            </Typography>
            <Typography
              sx={{
                color: "#5C5C5C",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
                width: "334px",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4452FE",
                width: "157px",
                height: "52px",
              }}
            >
              Sign Up
            </Button>
            <Avatar
              variant="rounded"
              alt="PC"
              src={pc}
              sx={{ width: "406px", height: "277px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              padding: "40px 35px",
              background: "#fff",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "400",
                textAlign: "center",
                display: "flex",
              }}
            >
              Design with real data
            </Typography>
            <Typography
              sx={{
                color: "#5C5C5C",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
                width: "334px",
                maxWidth: "100%",
              }}
            >
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4452FE",
                width: "157px",
                height: "52px",
              }}
            >
              Try For Free
            </Button>
            <Avatar
              variant="rounded"
              alt="board"
              src={free}
              sx={{ width: "406px", height: "277px" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;

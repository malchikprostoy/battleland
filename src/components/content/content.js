import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import pc from "../../assets/images/Macbook Pro.png";
import free from "../../assets/images/Boards Notifications.png";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "44px",
        marginTop: "160px",
        px: 2,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "48px",
              lg: "52px",
            },
            lineHeight: {
              xs: "42px",
              sm: "50px",
              md: "58px",
              lg: "62px",
            },
            fontWeight: "400",
          }}
        >
          Contents
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "20px",
            },
            lineHeight: {
              xs: "24px",
              sm: "26px",
              md: "30px",
            },
            fontWeight: "400",
            whiteSpace: "pre-wrap",
            maxWidth: "600px",
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
          alignItems: "stretch",
          gap: "33px",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
            p: 4,
            background: "#fff",
            borderRadius: "8px",
            width: {
              xs: "80%",
              sm: "90%",
              md: "45%",
              lg: "45%",
            },
            maxWidth: "500px",
            flexGrow: 1,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "400",
                textAlign: "center",
                mb: 2,
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
                textAlign: "center",
              }}
            >
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4452FE",
              width: "157px",
              height: "52px",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button>
          <Avatar
            variant="rounded"
            alt="PC"
            src={pc}
            sx={{
              width: "auto",
              height: "auto",
            }}
          />
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
            p: 4,
            background: "#fff",
            borderRadius: "8px",
            width: {
              xs: "80%",
              sm: "90%",
              md: "45%",
              lg: "45%",
            },
            maxWidth: "500px",
            flexGrow: 1,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "400",
                textAlign: "center",
                mb: 2,
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
                textAlign: "center",
              }}
            >
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4452FE",
              width: "157px",
              height: "52px",
              textTransform: "none",
            }}
          >
            Try For Free
          </Button>
          <Avatar
            variant="rounded"
            alt="board"
            src={free}
            sx={{
              width: "auto",
              height: "auto",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default Content;

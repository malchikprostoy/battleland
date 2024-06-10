import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import knife from "../../assets/images/icon-round-restaurant-menu.svg";
import head from "../../assets/images/icon-alien-outline.svg";
import infi from "../../assets/images/icon-all-inclusive.svg";
import features from "../../assets/images/Chat Bot.png";

const Features = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        marginTop: "162px",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "27px",
          flexWrap: "wrap",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "48px",
              lg: "52px",
            },
            fontWeight: "400",
            lineHeight: {
              xs: "42px",
              sm: "50px",
              md: "58px",
              lg: "62px",
            },
            color: "#fff",
          }}
        >
          Features
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "20px",
            },
            fontWeight: "400",
            lineHeight: {
              xs: "24px",
              sm: "28px",
              md: "30px",
            },
            textAlign: "center",
            color: "#fff",
            maxWidth: "600px",
            px: 2,
          }}
        >
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <Avatar
          alt="features"
          src={features}
          variant="rounded"
          sx={{
            width: "auto",
            height: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "309px",
              px: 2,
            }}
          >
            <Avatar alt="restaurant" src={knife} />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              A single source of truth
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: "#fff",
                maxWidth: "334px",
              }}
            >
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "309px",
              px: 2,
            }}
          >
            <Avatar alt="head" src={head} />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Intuitive interface
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: "#fff",
                maxWidth: "334px",
              }}
            >
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "309px",
              px: 2,
            }}
          >
            <Avatar alt="infinity" src={infi} />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                textAlign: "left",
                color: "#fff",
              }}
            >
              Or with rules
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: "#fff",
                maxWidth: "334px",
              }}
            >
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;

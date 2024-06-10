import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import knife from "../../assets/images/icon-round-restaurant-menu.svg";
import head from "../../assets/images/icon-alien-outline.svg";
import infi from "../../assets/images/icon-all-inclusive.svg";
import features from "../../assets/images/Chat Bot.png";

const Features = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          marginTop: "162px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "27px",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              fontSize: "52px",
              fontWeight: "400",
              lineHeight: "62px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Features
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "20px",
              textAlign: "center",
              color: "#fff",
              width: { sx: "600px", lg: "500px", md: "400px" },
              overflow: "hidden",
            }}
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="features"
            src={features}
            variant="rounded"
            sx={{
              width: {
                xl: "696px",
                lg: "550px",
                md: "450px",
                sm: "350px",
                xs: "300px",
              },
              height: {
                xl: "659px",
                lg: "550px",
                md: "450px",
                sm: "350px",
                xs: "300px",
              },
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
                width: "309px",
              }}
            >
              <Avatar alt="restarount" src={knife} />
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
                  width: "334px",
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
                width: "309px",
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
                  width: "334px",
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
                width: "309px",
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
                  width: "334px",
                }}
              >
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Features;

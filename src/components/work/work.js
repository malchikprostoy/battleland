import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import bg from "../../assets/images/screens.png";

const Work = () => {
  return (
    <>
      <Box sx={{ marginTop: "85px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "80px",
                fontWeight: "500",
                lineHeight: "88px",
                letterSpacing: "0.20000000298023224px",
                textAlign: "center",
              }}
            >
              Work
            </Typography>
            <Typography
              sx={{
                color: "#18DFC5",
                fontSize: "80px",
                fontWeight: "500",
                lineHeight: "88px",
                letterSpacing: "0.20000000298023224px",
                textAlign: "center",
              }}
            >
              fast
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30px",
              width: "75%",
              textAlign: "center",
            }}
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </Typography>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4452FE",
                width: "181px",
                height: "65px",
              }}
            >
              Try For Free
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#181818",
                width: "181px",
                height: "65px",
                border: "1px solid #fff",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Box>
        <Avatar
          alt="bg"
          src={bg}
          variant="rounded"
          sx={{ width: "auto", height: "auto", marginTop: 5 }}
        />
      </Box>
    </>
  );
};

export default Work;

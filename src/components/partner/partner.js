import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import partner1 from "../../assets/images/partnerlogo1.svg";
import partner2 from "../../assets/images/partnerlogo2.svg";
import partner3 from "../../assets/images/partnerlogo3.svg";
import partner4 from "../../assets/images/partnerlogo4.svg";
import partner5 from "../../assets/images/partnerlogo5.svg";
import partner6 from "../../assets/images/partnerlogo6.svg";

const Partner = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "160px",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "52px",
              lineHeight: "62px",
              color: "#fff",
            }}
          >
            Partners
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "30px",
              color: "#fff",
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
            flexDirection: "row",
            gap: "74px",
            flexWrap: "wrap",
          }}
        >
          <Avatar
            alt="partner"
            src={partner1}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
          <Avatar
            alt="partner"
            src={partner2}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
          <Avatar
            alt="partner"
            src={partner3}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
          <Avatar
            alt="partner"
            src={partner4}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
          <Avatar
            alt="partner"
            src={partner5}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
          <Avatar
            alt="partner"
            src={partner6}
            variant="rounded"
            sx={{ width: "60px", height: "60px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Partner;

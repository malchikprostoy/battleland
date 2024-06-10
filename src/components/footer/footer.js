import { Avatar, Box, Link, Typography } from "@mui/material";
import React from "react";
import loco from "../../assets/images/footerloc.svg";
import phone from "../../assets/images/footerphone.svg";
import twitter from "../../assets/images/footertwitter.svg";
import facebook from "../../assets/images/footerfacebook.svg";
import linkedin from "../../assets/images/footerlinkedin.svg";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "199px",
          marginTop: "160px",
          marginBottom: "160px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "119px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "column" }}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              Product
            </Typography>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Overview
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Features
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Roadmap
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Pricing
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "column" }}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              About
            </Typography>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Overview
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Team
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Vacancy Jobs
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Awards
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "column" }}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              Contact
            </Typography>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Head Office
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Subsidiaries
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Support
            </Link>
            <Link
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#fff",
                textDecoration: "none",
              }}
              href="#"
            >
              Feedback
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "24px", flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
            <Avatar alt="location" src={loco} variant="rounded" />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              65806 Briarwood Road San Francisco CA{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
            <Avatar alt="phone" src={phone} variant="rounded" />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              417-865-1442
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "24px", flexDirection: "row" }}>
            <Avatar alt="twitter" src={twitter} variant="rounded" />
            <Avatar alt="facebook" src={facebook} variant="rounded" />
            <Avatar alt="linkedin" src={linkedin} variant="rounded" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

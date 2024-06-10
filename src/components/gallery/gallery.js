import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";
import gallery7 from "../../assets/images/gallery7.png";

const Gallery = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "44px",
          marginTop: "160px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            Gallery
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <Avatar
            alt="gallery"
            src={gallery1}
            variant="rounded"
            sx={{
              width: {
                sx: "594px",
                xl: "550px",
                md: "500px",
                sm: "400px",
                xs: "350px",
              },
              height: {
                sx: "594px",
                xl: "550px",
                md: "500px",
                sm: "400px",
                xs: "350px",
              },
              flexWrap: "wrap",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <Avatar
              alt="gallery"
              src={gallery2}
              variant="rounded"
              sx={{
                width: {
                  sx: "594px",
                  xl: "550px",
                  lg: "500px",
                  md: "400px",
                  xs: "350px",
                },
                height: "176px",
                flexGrow: 1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <Avatar
                alt="gallery"
                src={gallery3}
                variant="rounded"
                sx={{ width: "280px", height: "176px" }}
              />
              <Avatar
                alt="gallery"
                src={gallery4}
                variant="rounded"
                sx={{ width: "280px", height: "176px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
              }}
            >
              <Avatar
                alt="gallery"
                src={gallery5}
                variant="rounded"
                sx={{ width: "176px", height: "176px" }}
              />
              <Avatar
                alt="gallery"
                src={gallery6}
                variant="rounded"
                sx={{ width: "176px", height: "176px" }}
              />
              <Avatar
                alt="gallery"
                src={gallery7}
                variant="rounded"
                sx={{ width: "176px", height: "176px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Gallery;

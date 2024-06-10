import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
import testimonial4 from "../../assets/images/testimonial4.png";

const Testimonial = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          marginTop: "160px",
          paddingX: { xs: 2, md: 0 }, // Padding for small screens
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: { xs: "32px", sm: "40px", md: "52px" },
            lineHeight: { xs: "42px", sm: "50px", md: "62px" },
            color: "#fff",
            textAlign: "center", // Center align text for better appearance
          }}
        >
          Testimonials
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "23px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
                border: "1px solid #5C5C5C",
                borderRadius: "10px",
                width: { xs: "100%", sm: "430px" }, // Full width on small screens
                padding: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Avatar
                  alt="avatar"
                  src={testimonial1}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#02E4C0",
                    }}
                  >
                    Claire Bell
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                    }}
                  >
                    Designer
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#fff",
                }}
              >
                I just wanted to share a quick note and let you know that you do
                a really good job. I'm glad I decided to work with you.
                Wonderful experience!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
                border: "1px solid #5C5C5C",
                borderRadius: "10px",
                width: { xs: "100%", sm: "430px" }, // Full width on small screens
                padding: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Avatar
                  alt="avatar"
                  src={testimonial2}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#02E4C0",
                    }}
                  >
                    Ralph Fisher
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                    }}
                  >
                    Coder
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#fff",
                }}
              >
                A friend of mine advised you to me, and I definitely liked
                working with you. It was a good experience. Thanks a lot!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
                border: "1px solid #5C5C5C",
                borderRadius: "10px",
                width: { xs: "100%", sm: "430px" }, // Full width on small screens
                height: "256px",
                padding: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Avatar
                  alt="avatar"
                  src={testimonial3}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#02E4C0",
                    }}
                  >
                    Francisco Lane
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                    }}
                  >
                    Coder
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#fff",
                }}
              >
                You’re just awesome! The prices are reasonable, and the service
                is just great. Thank you so much! Highly recommend!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
                border: "1px solid #5C5C5C",
                borderRadius: "10px",
                width: { xs: "100%", sm: "430px" }, // Full width on small screens
                padding: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Avatar
                  alt="avatar"
                  src={testimonial4}
                  sx={{ width: "50px", height: "50px" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#02E4C0",
                    }}
                  >
                    Jorge Murphy
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#fff",
                    }}
                  >
                    Designer
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#fff",
                }}
              >
                You did an amazing job and I wholeheartedly recommend you to
                everyone I know. You are the best!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;

import React from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box sx={{ height: "100vh", width: "100%", marginTop: "160px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </Box>
  );
}

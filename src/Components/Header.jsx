import React from "react";
// import Box from "@mui/material/Box";

import { Box, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";

const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 53px;
  background: #1e633f;
  display: flex;
  color: white;
`;

function Headers() {
  return (
    <HeaderWrapper>
      <Grid sx={{ width: "50%", height: "100%" }} container>
        <Grid item xs={3} sx={{ fontSize: "25px", fontFamily: "Monospace" }}>
          Reeco
        </Grid>
        <Grid item xs={3}>
          Store
        </Grid>
        <Grid item xs={3}>
          Orders
        </Grid>
        <Grid item xs={3}>
          Analytics
        </Grid>
      </Grid>
      <Grid
        sx={{
          width: "50%",
          height: "100%",
          flexDirection: "row-reverse",
        }}
        container
      >
        <Grid item xs={4}>
          Hello, James
        </Grid>
        <Grid item xs={3}>
          <ShoppingCartIcon />
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
}
export default Headers;

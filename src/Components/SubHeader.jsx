import React from "react";
// import Box from "@mui/material/Box";

import { Box, Grid, Button, Typography } from "@mui/material";
import styled from "styled-components";

const SubHeaderWrapper = styled(Grid)`
  width: 100%;
  height: 80px;
  display: flex;
  box-shadow: 0 5px 5px #eeeeee;
  padding: 20px;
`;

const OrderIdWrapper = styled(Grid)`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const RouteDetails = styled(Box)`
  && {
    height: 50%;
    text-align: start;
    color: #aeaeae;
    font-weight: 500;
  }
`;

const OrderId = styled(Box)`
  && {
    height: 50%;
    text-align: start;
    font-size: 25px;
    font-weight: 500;
  }
`;

const ActionWrapper = styled(Grid)`
  && {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
  }
`;

const ApproveButton = styled(Button)`
  && {
    height: 35px;
    margin: 0px 15px;
    border: 1px solid #1e633f;
    color: white;
    background: #1e633f;
    border-radius: 16px;
  }
`;

const BackButton = styled(Button)`
  && {
    height: 35px;
    border: 1px solid #1e633f;
    color: #1e633f;
    border-radius: 16px;
  }
`;

function SubHeader() {
  return (
    <SubHeaderWrapper container>
      <OrderIdWrapper item xs={6}>
        <RouteDetails>
          Orders &nbsp; &gt; &nbsp;
          <span style={{ textDecoration: "underline" }}> Order 234213ABC </span>
        </RouteDetails>
        <OrderId>Order 234213ABC </OrderId>
      </OrderIdWrapper>
      <ActionWrapper item xs={6}>
        <ApproveButton variant="contained">Approve Order</ApproveButton>
        <BackButton variant="outlined">Back</BackButton>
      </ActionWrapper>
    </SubHeaderWrapper>
  );
}
export default SubHeader;

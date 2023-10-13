import React from "react";
import Headers from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import OrdersTable from "../Components/OrdersTable";
import OrderInfo from "../Components/OrderInfo";
import styled from "styled-components";
import { Box, Grid, Button, Typography } from "@mui/material";

const OrderDetailSection = styled(Box)`
  padding: 30px;
`;

function OrdersDetail() {
  return (
    <>
      <Headers />
      <SubHeader />
      <OrderDetailSection>
        <OrderInfo />
        <OrdersTable />
      </OrderDetailSection>
    </>
  );
}
export default OrdersDetail;

import React from "react";
import { Box, Grid, Button, Tab, Typography } from "@mui/material";
import styled from "styled-components";

const OrderInforWraper = styled(Grid)`
  border: 1px solid #d5d1d1;
  background: white;
  padding: 12px;
  border-radius: 12px;
`;

const CustomiseBox = styled.div`
  padding: 10px;
  height: 100%;
  margin: 2px;
  display: flex;
  flex-direction: column;
  height: 80px;
  border-right: ${(props) => (props.lastItem ? "none" : "1px solid #d5d1d1")};
  text-align: start;
`;

const SubHeaderText = styled(Typography)`
  && {
    font-weight: 600;
    font-size: 16px;
  }
`;

const HeaderTitle = styled(Typography)`
  && {
    color: #a2a2a2;
    font-weight: 600;
    font-size: 14px;
  }
`;

const orderInfoData = [
  {
    title: "Supplier",
    subHeader: "East ciast fruits & vegetables",
  },
  {
    title: "Shipping Date",
    subHeader: "Thu, Feb 12",
  },
  {
    title: "Total",
    subHeader: "$333,423",
  },
  {
    title: "Test",
    subHeader: "Dummy icons ",
  },
  {
    title: "Department",
    subHeader: "488-488-393",
  },
  {
    title: "Status",
    subHeader: "Awating your approval",
  },
];

function OrderInfo() {
  return (
    <OrderInforWraper container>
      {orderInfoData.map((item, index) => (
        <Grid item xs={2}>
          <CustomiseBox lastItem={index === orderInfoData.length - 1}>
            <HeaderTitle>{item.title}</HeaderTitle>
            <SubHeaderText>{item.subHeader}</SubHeaderText>
          </CustomiseBox>
        </Grid>
      ))}
    </OrderInforWraper>
  );
}
export default OrderInfo;

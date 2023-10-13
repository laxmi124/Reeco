import React from "react";
import Headers from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import OrdersTable from "../Components/OrdersTable";
import { Box, Grid, Button, Tab, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import PrintIcon from "@mui/icons-material/Print";

const OrderSearchWrapper = styled(Box)`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  background: white;
`;
const AddItemButton = styled.button`
  height: 35px;
  border: 1px solid #1e633f;
  color: #1e633f;
  border-radius: 16px;
  font-weight: 600;
  text-transform: none;
  padding: 0px 12px;
  margin: 0px 40px;
`;

function OrderSearch() {
  return (
    <OrderSearchWrapper>
      <TextField
        label="Search"
        InputProps={{
          endAdornment: <SearchIcon />,
          sx: {
            borderRadius: "20px",
            height: "45px",
          },
        }}
        sx={{
          width: "370px",
        }}
      />
      <div>
        <AddItemButton>Add Item</AddItemButton>
        <PrintIcon style={{ color: "#1e633f" }} />
      </div>
    </OrderSearchWrapper>
  );
}
export default OrderSearch;

import React, { useState } from "react";
// import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Button, Tab } from "@mui/material";
import { approveOrder } from "../feature/editOrderSlice";
import ConfirmMissingOrder from "./ConfirmMissingOrder";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import OrderSearch from "./OrderSearch";

import styled from "styled-components";

const ProductImage = styled.img`
  height: 50px;
  width: 50px;
`;
const OrderTableWrapper = styled.div`
  margin-top: 30px;
  border: 1px solid #d5d1d1;
  border-radius: 12px;
  padding: 20px;
`;

const ProductImageColumn = styled(TableCell)`
  height: 50px;
  width: 50px;
`;

function OrdersTable() {
  const [showMissingModal, setShowMissingModal] = useState(false);
  const [initiatedMissingOrderFor, setInitiatedMissingOrderFor] =
    useState(null);

  const orderDetailsTableData = useSelector(
    (state) => state.orderDetailsTableData
  );
  const dispatch = useDispatch();

  const handleClickMissingButton = (orderDetail) => {
    setShowMissingModal(!showMissingModal);
    setInitiatedMissingOrderFor(orderDetail);
  };

  const handleCloseMissingModal = () => {
    setShowMissingModal(false);
  };
  return (
    <OrderTableWrapper>
      <OrderSearch />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Queantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetailsTableData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <ProductImageColumn>
                  <ProductImage src={row.productImage} />
                </ProductImageColumn>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.brandName}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.total}</TableCell>

                <TableCell align="right">
                  {row.isApproved && (
                    <Chip
                      label="Approved"
                      color="success"
                      sx={{ background: "#3DCA72", color: "white" }}
                    />
                  )}
                  {row.isOrderUrgent && (
                    <Chip
                      label="Missing - Urgent"
                      sx={{ background: "#DB2114", color: "white" }}
                    />
                  )}
                  {row.isMissing && (
                    <Chip
                      label="Missing"
                      sx={{ background: "#F66D44", color: "white" }}
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  <Box onClick={() => dispatch(approveOrder(row.id))}>
                    <CheckIcon sx={{ color: "green" }} />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box onClick={() => handleClickMissingButton(row)}>
                    <CloseIcon sx={{ color: "red" }} />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ cursor: "pointer" }}>Edit</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ConfirmMissingOrder
        showMissingModal={showMissingModal}
        handleCloseMissingModal={handleCloseMissingModal}
        missingOrderDetail={initiatedMissingOrderFor}
      />
    </OrderTableWrapper>
  );
}
export default OrdersTable;

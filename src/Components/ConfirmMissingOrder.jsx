import React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, Grid, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { urgentOrderMissing, orderMissing } from "../feature/editOrderSlice";

import styled from "styled-components";

const CustomDialogTitle = styled(DialogTitle)`
  && {
    font-weight: 600;
  }
`;

const DialogActionButton = styled(Button)`
  && {
    color: black;
    font-weight: 400;
  }
`;

const DialogWrapper = styled.div`
  width: 330px;
  padding: 10px 25px;
`;

const DialogActionWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

function ConfirmMissingOrder({
  showMissingModal,
  handleCloseMissingModal,
  missingOrderDetail,
}) {
  const dispatch = useDispatch();

  const handleConfirmMissingOrder = () => {
    dispatch(orderMissing(missingOrderDetail?.id));
    handleCloseMissingModal();
  };
  const handleUrgentMissingOrder = () => {
    dispatch(urgentOrderMissing(missingOrderDetail?.id));
    handleCloseMissingModal();
  };
  return (
    <Dialog onClose={handleCloseMissingModal} open={showMissingModal}>
      <CustomDialogTitle>Missing Product? </CustomDialogTitle>
      <DialogWrapper>
        <Typography>Is "{missingOrderDetail?.name || ""}" urgent? </Typography>
        <DialogActionWrapper>
          <DialogActionButton onClick={handleUrgentMissingOrder}>
            Yes
          </DialogActionButton>
          <DialogActionButton onClick={handleConfirmMissingOrder}>
            No
          </DialogActionButton>
        </DialogActionWrapper>
      </DialogWrapper>
    </Dialog>
  );
}
export default ConfirmMissingOrder;

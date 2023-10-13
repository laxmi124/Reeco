import { createSlice } from "@reduxjs/toolkit";
import AppleGreenSmith from "../productImages/AppleGreenSmith.png";
import AvocadoHass from "../productImages/AvocadoHass.jpg";


const initialState = {
  orderDetailsTableData: [
    {
      id: 1,
      name: "Frozen yoghurt",
      brandName: "test",
      price: 6343,
      quantity: 24,
      total: 4323,
      isApproved: false,
      isMissing: false,
      isOrderUrgent: false,
      productImage: AppleGreenSmith,
    },
    {
      id: 2,
      name: "Ice cream",
      brandName: "test",
      price: 9232,
      quantity: 37,
      total: 321231,
      isApproved: false,
      isMissing: false,
      isOrderUrgent: false,
      productImage: AppleGreenSmith,
    },
    {
      id: 3,
      name: "Eclair",
      brandName: "test",
      price: 16.0,
      quantity: 24,
      total: 62312,
      isApproved: false,
      isMissing: false,
      isOrderUrgent: false,
      productImage: AvocadoHass,
    },
    {
      id: 4,
      name: "Cupcake",
      brandName: "test",
      price: 3.7,
      quantity: 67,
      total: 423,
      isApproved: false,
      isMissing: false,
      isOrderUrgent: false,
      productImage: AppleGreenSmith,
    },
    {
      id: 5,
      name: "Gingerbread",
      brandName: "test",
      price: 162,
      quantity: 49,
      total: 3212,
      isApproved: false,
      isMissing: false,
      isOrderUrgent: false,
      productImage: AvocadoHass,
    },
  ],
};

export const editOrderSlice = createSlice({
  name: "editOrder",
  initialState,
  reducers: {
    approveOrder: (state, action) => {
      state.orderDetailsTableData.forEach((order) => {
        if (order.id === action.payload) {
          order.isApproved = true;
          order.isMissing = false;
          order.isOrderUrgent = false;
        }
      });
    },
    urgentOrderMissing: (state, action) => {
      state.orderDetailsTableData.forEach((order) => {
        if (order.id === action.payload) {
          order.isOrderUrgent = true;
          order.isMissing = false;
          order.isApproved = false;
        }
      });
    },
    orderMissing: (state, action) => {
      state.orderDetailsTableData.forEach((order) => {
        if (order.id === action.payload) {
          order.isMissing = true;
          order.isApproved = false;
          order.isOrderUrgent = false;
        }
      });
    },
  },
});

export const { approveOrder, urgentOrderMissing, orderMissing } =
  editOrderSlice.actions;
export default editOrderSlice.reducer;

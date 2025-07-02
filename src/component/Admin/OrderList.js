// Admin wala orders

import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate for React Router v6
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";

const OrderList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate(); // ✅ useNavigate instead of history

  const { error, orders } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      navigate("/admin/orders"); // ✅ replaced history.push
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, isDeleted, navigate]); // ✅ included navigate

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "products",
      headerName: "Products",
      minWidth: 300,
      flex: 0.7,
      renderCell: (params) => {
        return (
          <div>
            {params.getValue(params.id, "products").map((item, index) => (
              <div key={index}>
                {item.name} (Qty: {item.quantity})
              </div>
            ))}
          </div>
        );    
      },
    },
    {
      field: "shippingAddress",
      headerName: "Shipping Address",
      minWidth: 300,
      flex: 0.7,
      renderCell: (params) => {
        const address = params.getValue(params.id, "shippingAddress");
        return (
          <div>
            <div>{address.address}</div>
            <div>{address.city}, {address.state}</div>
            <div>{address.country} - {address.pinCode}</div>
            <div>Phone: {address.phoneNo}</div>
          </div>
        );
      },
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            {/* <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link> */}
            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
        products: item.orderItems,
        shippingAddress: item.shippingInfo,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;

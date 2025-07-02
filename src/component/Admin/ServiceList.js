import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import { getAdminServices, deleteService } from "../../actions/serviceAction";
import { DELETE_SERVICE_RESET } from "../../constants/serviceConstants";
import "./ServiceList.css";

const ServiceList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, services } = useSelector((state) => state.services);
  const { error: deleteError, isDeleted } = useSelector((state) => state.service);

  const deleteServiceHandler = (id) => {
    dispatch(deleteService(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    if (deleteError) {
      alert.error(deleteError);
    }

    if (isDeleted) {
      alert.success("Service Deleted Successfully");
      dispatch({ type: DELETE_SERVICE_RESET });
    }

    dispatch(getAdminServices());
  }, [dispatch, alert, error, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Service ID", minWidth: 200, flex: 0.5 },
    { field: "name", headerName: "Name", minWidth: 350, flex: 1 },
    { field: "price", headerName: "Price", minWidth: 150, flex: 0.3 },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/service/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button onClick={() => deleteServiceHandler(params.getValue(params.id, "id"))}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  services &&
    services.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        price: item.price,
      });
    });

  return (
    <>
      <MetaData title={`ALL SERVICES - Admin`} />

      <div className="dashboard">
        <Sidebar />
        <div className="serviceListContainer">
          <h1 id="serviceListHeading">ALL SERVICES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="serviceListTable"
            autoHeight
          />
        </div>
      </div>
    </>
  );
};

export default ServiceList; 
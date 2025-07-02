import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  getAllAppointments,
  deleteAppointment,
  updateAppointment,
} from "../../actions/appointmentAction";
import {
  DELETE_APPOINTMENT_RESET,
  UPDATE_APPOINTMENT_RESET,
} from "../../constants/appointmentConstants";
import "./AdminAppointments.css";
import {

  clearErrors
} from "../../actions/userAction";

const AdminAppointments = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, appointments } = useSelector((state) => state.allAppointments);
  const { error: deleteError, isDeleted } = useSelector((state) => state.appointment);
  const { error: updateError, isUpdated } = useSelector((state) => state.appointment);

  const deleteAppointmentHandler = (id) => {
    dispatch(deleteAppointment(id));
  };

  const updateAppointmentHandler = (id, status) => {
    dispatch(updateAppointment(id, { status }));
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
      alert.success("Appointment Deleted Successfully");
      navigate("/admin/appointments");
      dispatch({ type: DELETE_APPOINTMENT_RESET });
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Appointment Updated Successfully");
      dispatch({ type: UPDATE_APPOINTMENT_RESET });
    }

    dispatch(getAllAppointments());
  }, [dispatch, alert, error, deleteError, isDeleted, updateError, isUpdated, navigate]);

  const columns = [
    { field: "id", headerName: "Appointment ID", minWidth: 200, flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "service",
      headerName: "Service",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      flex: 0.5,
      valueGetter: (params) => {
        return new Date(params.row.date).toLocaleDateString();
      },
    },
    {
      field: "time",
      headerName: "Time",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Confirmed"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "paymentStatus",
      headerName: "Payment",
      minWidth: 120,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "paymentStatus") === "Paid"
          ? "greenColor"
          : "redColor";
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
            <Button
              onClick={() =>
                updateAppointmentHandler(
                  params.getValue(params.id, "id"),
                  "Confirmed"
                )
              }
            >
              <EditIcon />
            </Button>

            <Button
              onClick={() =>
                deleteAppointmentHandler(params.getValue(params.id, "id"))
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

  appointments &&
    appointments.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        service: item.service,
        date: item.date,
        time: item.time,
        status: item.status,
        paymentStatus: item.paymentStatus,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL APPOINTMENTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="appointmentListContainer">
          <h1 id="appointmentListHeading">ALL APPOINTMENTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="appointmentListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminAppointments; 
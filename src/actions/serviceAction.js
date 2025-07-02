import api from "../utils/axios"
import {
  ALL_SERVICES_REQUEST,
  ALL_SERVICES_SUCCESS,
  ALL_SERVICES_FAIL,
  ADMIN_SERVICES_REQUEST,
  ADMIN_SERVICES_SUCCESS,
  ADMIN_SERVICES_FAIL,
  NEW_SERVICE_REQUEST,
  NEW_SERVICE_SUCCESS,
  NEW_SERVICE_FAIL,
  NEW_SERVICE_RESET,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_RESET,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_RESET,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/serviceConstants";

// Get All Services
export const getServices = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SERVICES_REQUEST });

    const { data } = await api.get("/api/v1/services");

    dispatch({
      type: ALL_SERVICES_SUCCESS,
      payload: data.services,
    });
  } catch (error) {
    dispatch({
      type: ALL_SERVICES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Services For Admin
export const getAdminServices = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_SERVICES_REQUEST });

    const { data } = await api.get("/api/v1/admin/services");

    dispatch({
      type: ADMIN_SERVICES_SUCCESS,
      payload: data.services,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_SERVICES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Service
export const createService = (serviceData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SERVICE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await api.post(
      "/api/v1/admin/service/new",
      serviceData,
      config
    );

    dispatch({
      type: NEW_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Service
export const updateService = (id, serviceData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await api.put(
      `/api/v1/admin/service/${id}`,
      serviceData,
      config
    );

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Service
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });

    const { data } = await api.delete(`/api/v1/admin/service/${id}`);

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Service Details
export const getServiceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await api.get(`/api/v1/service/${id}`);

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data.service,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}; 
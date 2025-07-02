import {
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
  MY_APPOINTMENTS_REQUEST,
  MY_APPOINTMENTS_SUCCESS,
  MY_APPOINTMENTS_FAIL,
  ALL_APPOINTMENTS_REQUEST,
  ALL_APPOINTMENTS_SUCCESS,
  ALL_APPOINTMENTS_FAIL,
  UPDATE_APPOINTMENT_REQUEST,
  UPDATE_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_FAIL,
  UPDATE_APPOINTMENT_RESET,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAIL,
  DELETE_APPOINTMENT_RESET,
  APPOINTMENT_DETAILS_REQUEST,
  APPOINTMENT_DETAILS_SUCCESS,
  APPOINTMENT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/appointmentConstants";

export const newAppointmentReducer = (state = { appointment: {} }, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        appointment: action.payload.appointment,
      };
    case CREATE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const myAppointmentsReducer = (state = { appointments: [] }, action) => {
  switch (action.type) {
    case MY_APPOINTMENTS_REQUEST:
      return {
        loading: true,
      };
    case MY_APPOINTMENTS_SUCCESS:
      return {
        loading: false,
        appointments: action.payload,
      };
    case MY_APPOINTMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const allAppointmentsReducer = (state = { appointments: [] }, action) => {
  switch (action.type) {
    case ALL_APPOINTMENTS_REQUEST:
      return {
        loading: true,
      };
    case ALL_APPOINTMENTS_SUCCESS:
      return {
        loading: false,
        appointments: action.payload,
      };
    case ALL_APPOINTMENTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};



export const appointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_APPOINTMENT_REQUEST:
    case DELETE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_APPOINTMENT_FAIL:
    case DELETE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_APPOINTMENT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_APPOINTMENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const appointmentDetailsReducer = (state = { appointment: {} }, action) => {
  switch (action.type) {
    case APPOINTMENT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case APPOINTMENT_DETAILS_SUCCESS:
      return {
        loading: false,
        appointment: action.payload,
      };
    case APPOINTMENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}; 
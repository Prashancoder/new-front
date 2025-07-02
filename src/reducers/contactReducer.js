// reducers/contactReducer.js

import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  CLEAR_ERRORS,
} from "../constants/contactConstants";

// Reducer to handle fetching all contacts and submitting new ones
const contactReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
    case CONTACT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case CONTACT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case CONTACT_FAIL:
    case CONTACT_LIST_FAIL:
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

// Reducer to handle deleting a contact
export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return { loading: true };
    case DELETE_CONTACT_SUCCESS:
      return { loading: false, success: true, message: action.payload };
    case DELETE_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default contactReducer;

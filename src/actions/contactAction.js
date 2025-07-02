import axios from "axios";
import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CLEAR_ERRORS,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
} from "../constants/contactConstants";

// Create Contact
export const createContact = (contactData) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/contact", contactData, config);

    dispatch({
      type: CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_CONTACT_REQUEST" });

    const { data } = await axios.delete(`/api/v1/admin/contact/${id}`);

    dispatch({
      type: "DELETE_CONTACT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_CONTACT_FAIL",
      payload: error.response.data.message,
    });
  }
};


// Get All Contacts (Admin)
export const getAllContacts = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LIST_REQUEST });

    const { data } = await axios.get("/api/v1/admin/contacts");

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data.contacts,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
}; 
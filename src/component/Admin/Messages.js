import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts, deleteContact } from "../../actions/contactAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./Messages.css";
import { FaTrash } from "react-icons/fa";
import SideBar from "./Sidebar";

const Messages = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, contacts } = useSelector((state) => state.contacts);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getAllContacts());
  }, [dispatch, alert, error]);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDeleteConfirmed = () => {
    dispatch(deleteContact(deleteId))
      .then(() => {
        alert.success("Message deleted");
        dispatch(getAllContacts());
      })
      .catch(() => {
        alert.error("Failed to delete message");
      });
    setShowModal(false);
    setDeleteId(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const sortedContacts = contacts ? [...contacts].sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  ) : [];

  return (
    <>
      <MetaData title="All Messages - Admin" />
      <div className="dashboard">
        <SideBar />
        <div className="messagesContainer">
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1 className="messagesHeading">All Messages</h1>
              <div className="messagesList">
                {sortedContacts.map((contact) => (
                  <div key={contact._id} className="messageCard">
                    <div className="messageHeader">
                      <h3>{contact.name}</h3>
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="messageInfo">
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Phone:</strong> {contact.phone}</p>
                      <p><strong>Subject:</strong> {contact.subject}</p>
                    </div>
                    <div className="messageContent">
                      <p><strong>Message:</strong></p>
                      <p>{contact.message}</p>
                    </div>
                    <div className="messageActions">
                      <button
                        onClick={() => confirmDelete(contact._id)}
                        className="deleteBtn"
                      >
                        <FaTrash style={{ marginRight: "6px" }} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom Delete Confirmation Modal */}
      {showModal && (
        <div className="customModalOverlay">
          <div className="customModal">
            <p>Are you sure you want to delete this message?</p>
            <div className="modalButtons">
              <button onClick={handleDeleteConfirmed} className="confirmBtn">Yes, Delete</button>
              <button onClick={handleCancelDelete} className="cancelBtn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;

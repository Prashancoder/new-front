import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../actions/contactAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import "./ContactList.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getAllContacts());
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="All Messages - Admin" />
          <div className="contactListContainer">
            <h1>All Messages</h1>
            <div className="contactList">
              {contacts &&
                contacts.map((contact) => (
                  <div key={contact._id} className="contactCard">
                    <div className="contactHeader">
                      <h3>{contact.name}</h3>
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="contactInfo">
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Phone:</strong> {contact.phone}</p>
                      <p><strong>Subject:</strong> {contact.subject}</p>
                    </div>
                    <div className="contactMessage">
                      <p><strong>Message:</strong></p>
                      <p>{contact.message}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactList; 
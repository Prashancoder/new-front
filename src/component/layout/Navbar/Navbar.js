import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../images/logo.png";
import { logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
    setDropdownOpen(false);
    navigate("/");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when menu or modal is open
  useEffect(() => {
    document.body.style.overflow = menuOpen || showModal ? "hidden" : "auto";
  }, [menuOpen, showModal]);

  // Focus modal heading on open
  useEffect(() => {
    if (showModal) {
      document.getElementById("modal-heading")?.focus();
    }
  }, [showModal]);

  return (
    <>
      <nav className="main-navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleMenuToggle}>Home</Link>
          <Link to="/about" onClick={handleMenuToggle}>About Us</Link>
          <Link to="/services" onClick={handleMenuToggle}>Services</Link>
          <Link to="/products" onClick={handleMenuToggle}>Products</Link>
          <Link to="/numerology"> Calculator</Link>
          <button onClick={openModal} className="event-button">Events</button>
          <Link to="/contact" onClick={handleMenuToggle}>Contact</Link>
        </div>

     {/* Mobile Auth */}
<div className="navbar-auth-mobile">
  {!token ? (
    <Link
      to="/login"
      className="login-register-link"
      onClick={() => setMenuOpen(false)}
    >
      Login / Register
    </Link>
  ) : (
    <div className="navbar-profile-mobile">
      <span onClick={handleDropdownToggle}>
        <img
          className="navbar-avatar"
          src={user?.avatar?.url || "/Profile.png"}
          alt="Profile"
        />
      </span>
      {dropdownOpen && (
        <div className="navbar-dropdown-mobile">
          <Link
            to="/account"
            onClick={() => {
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            Profile
          </Link>
          <Link
            to="/cart"
            onClick={() => {
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            Add to Cart
          </Link>
          <Link
            to="/orders"
            onClick={() => {
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            Orders
          </Link>
          {user?.role === "admin" && (
            <Link
              to="/admin/dashboard"
              onClick={() => {
                setDropdownOpen(false);
                setMenuOpen(false);
              }}
            >
              Dashboard
            </Link>
          )}
          <span
            onClick={handleLogout}
            style={{ cursor: "pointer", padding: "0.7rem 1.2rem" }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  )}
</div>


        {/* Desktop Auth */}
        <div className="navbar-auth-desktop">
          {!token ? (
            <Link to="/login">Login / Register</Link>
          ) : (
            <div className="navbar-profile" onClick={handleDropdownToggle}>
              <img
                className="navbar-avatar"
                src={user?.avatar?.url || "/Profile.png"}
                alt="Profile"
              />
              {dropdownOpen && (
                <div className="navbar-dropdown">
                  <Link to="/account">Profile</Link>
                  <Link to="/cart">Add to Cart</Link>
                  <Link to="/orders">Orders</Link>
                  {user?.role === "admin" && (
                    <Link to="/admin/dashboard">Dashboard</Link>
                  )}
                  <span onClick={handleLogout} style={{ cursor: "pointer", padding: "0.7rem 1.2rem" }}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Toggle Icon */}
        <div className="navbar-toggle" onClick={handleMenuToggle}>
          <span className="navbar-toggle-icon">☰</span>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-heading" tabIndex="-1">Event Coming Soon</h2>
            <p>Stay tuned for updates on our exciting upcoming events!</p>
            <button onClick={closeModal} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

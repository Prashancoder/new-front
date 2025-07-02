import React, { useState } from 'react';
import logo from '../../../images/logo.png';

const Header = ({ isLoggedIn, isAdmin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        <div style={{ ...styles.navLinks, display: menuOpen ? 'flex' : 'none' }} className="menu">
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/products" style={styles.link}>Products</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.authSection}>
          {!isLoggedIn ? (
            <a href="/login" style={styles.loginLink}>Login / Register</a>
          ) : (
            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              style={styles.profileDropdown}
            >
              <span style={styles.userIcon}>👤</span>
              {dropdownOpen && (
                <div style={styles.dropdownMenu}>
                  <a href="/profile" style={styles.dropdownItem}>Profile</a>
                  <a href="/cart" style={styles.dropdownItem}>Add to Cart</a>
                  <a href="/orders" style={styles.dropdownItem}>Orders</a>
                  {isAdmin && <a href="/admin/dashboard" style={styles.dropdownItem}>Dashboard</a>}
                  <a href="/logout" style={styles.dropdownItem}>Logout</a>
                </div>
              )}
            </div>
          )}
        </div>

        <div style={styles.toggleButton} onClick={toggleMenu}>
          ☰
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .menu {
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            background: white;
            width: 100%;
            padding: 10px;
            z-index: 1000;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 30px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    position: 'relative',
  },
  logoSection: {
    flex: '1',
  },
  logo: {
    height: '50px',
  },
  navLinks: {
    flex: '3',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#222',
    fontWeight: '500',
    fontSize: '16px',
  },
  authSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'gray',
    fontSize: '16px',
  },
  profileDropdown: {
    position: 'relative',
    cursor: 'pointer',
  },
  userIcon: {
    fontSize: '20px',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '30px',
    right: '0',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    zIndex: 1000,
    padding: '10px',
    minWidth: '150px',
  },
  dropdownItem: {
    display: 'block',
    padding: '8px 12px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
  },
  toggleButton: {
    display: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

// Show hamburger only on mobile
styles['@media (max-width: 768px)'] = {
  toggleButton: { display: 'block' },
  navLinks: { display: 'none' },
};

export default Header;

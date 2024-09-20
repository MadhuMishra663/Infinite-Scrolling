import React, { useState } from 'react';
import './Navbar.css';
import SignupForm from './SignupForm'; 
import ShoppingCard from './ShoppingCard';

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false); 

  const handleMenClick = () => {
    if (isSignedUp) {
      setShowShoppingCard(true); 
    } else {
      alert('Please sign up to access the Shopping Card.'); 
    }
  };

  const handleSignupSuccess = () => {
    setIsSignedUp(true);
    setIsSignupFormVisible(false); 
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          <li 
            className="nav-item" 
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            Products
            {isMegaMenuOpen && (
              <div className="mega-menu">
                <div className="mega-menu-column">
                  <h4>Electronics</h4>
                  <ul>
                    <li>Phones</li>
                    <li>Laptops</li>
                    <li>Cameras</li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Clothing</h4>
                  <ul>
                    <li onClick={handleMenClick}>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h4>Furniture</h4>
                  <ul>
                    <li>Sofas</li>
                    <li>Chairs</li>
                    <li>Tables</li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li 
            className="nav-item signup-button" 
            onClick={() => setIsSignupFormVisible(!isSignupFormVisible)}
          >
            Signup
          </li>
        </ul>
      </nav>

      {isSignupFormVisible && (
        <div className="signup-form-container">
          <SignupForm onSignupSuccess={handleSignupSuccess} /> 
        </div>
      )}
      
      {isSignedUp && <ShoppingCard />}
    </>
  );
};

export default Navbar;

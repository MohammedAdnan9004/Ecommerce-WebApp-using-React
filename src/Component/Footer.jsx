import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <p className="footer-logo">ShopIn5Minute</p>
          <p>Delivering happiness, one product at a time.</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home </li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>FAQs</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact</h4>
          <p>Email: support@shopin5minute.com</p>
          <p>Phone: +91-9004474908</p>
          <p>Address: Mumbra Thane, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopIn5Minute. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

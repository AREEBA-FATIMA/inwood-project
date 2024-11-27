import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-white text-teal-800 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 md:px-0"> {/* Add horizontal padding for small screens */}
          
          {/* Logo and Contact Info */}
          <div>
            {/* Chair icon as the logo */}
            <div className="logo flex items-center mb-4" id='oswald'>
              <i className="fas fa-chair text-3xl p-1 text-white bg-teal-900"></i>
              <span className="text-xl ml-2 font-bold">INWOOD</span>
            </div>
            
            {/* Social Icons */}
            <ul className="social-icons flex space-x-8 mb-4">
              <li><a href="#"><i className="fab fa-facebook leading-tight text-2xl"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram leading-tight text-2xl"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin leading-tight text-2xl"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter leading-tight text-2xl"></i></a></li>
            </ul>

            {/* Contact Information */}
            <p className='font-bold mt-10'>Address:</p>
            <p>+123 654 987</p>
            <p>877 The Bronx, NY</p>
            <p>14568, USA</p>
          </div>

          {/* My Account Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">My Account</h4>
            <ul>
              <li><Link href="/signin">Sign in</Link></li>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/order-status">Order status</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Help</h4>
            <ul>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/sizing">Sizing</Link></li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul>
              <li><Link href="/all-products">All Products</Link></li>
              <li><Link href="/bedroom">Bedroom</Link></li>
              <li><Link href="/dining-room">Dining Room</Link></li>
            </ul>
          </div>
          
          {/* Legal Stuff Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal Stuff</h4>
            <ul>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy & Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left font-semibold text-sm mt-10">
          <p>Copyright ©2020 INWOOD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

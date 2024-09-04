import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>CraveIt: Bringing your favorite flavors to your doorstep. Delicious meals, quick delivery, and a seamless ordering experience—all in one app.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-223-456-789</li>
                    <li>contact@craveit.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>© 2024 CraveIt. All rights reserved.</p>
    </div>
  )
}

export default Footer

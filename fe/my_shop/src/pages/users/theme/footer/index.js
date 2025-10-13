import {memo} from "react"
import "./style.scss"
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import {  FaFacebookMessenger, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return(
      <footer className="footer">
      <div className="container">
      <div className="f1">
        <h3>Exclusive</h3>
        <p>Subcribe</p>
        <div className="send-box">
       <input type="text" placeholder="Enter Your Email..." />
        <span className="icon"><IoMdSend /></span>
       </div>
      </div>
      <div className="f2">
        <h3>Support</h3>
        <p>Address: HN</p>
        <p>Email: example@gmail.com</p>
        <p>Phone: 0123456789</p>
      </div>
       <div className="f3">
        <h3>Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
         <p>Shop</p>
      </div>
       <div className="f4">
        <h3>Quick Link</h3>
        <p>Privacy Palicy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
         <p>Contact</p>
      </div>
      <div className="f5">
        <h3>Save S3 with app User Only</h3>
        <p><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" height="50px"/></p>
        <div className="footer_icon">
         <Link to="fb"><FaFacebook /></Link>
         <Link to="mess"><FaFacebookMessenger /></Link>
         <Link to="inst"><FaInstagramSquare/></Link>
        </div>
      </div>
      </div>
      </footer>
    )
}
export default memo(Footer);
import {memo} from "react"
import "./style.scss"
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return(
      <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 ">
            <div className="footer_about">
             <h1 className="footer_about_logo">WEBSITE</h1>
             <ul>
                <li>Đia chỉ: Hà Nội</li>
                 <li>Phone: 0123456789</li>
                  <li>Email: example@gmail.com</li>
             </ul>
            </div>
        </div>
        <div className="col-lg-3 ">
            <h2>Cửa Hàng</h2>
            <ul>
                <li>Liên Hệ</li>
                <li>Thông tin về chúng tôi</li>
                <li>Sản Phẩm Kinh doanh</li>
            </ul>
        </div>
         <div className="col-lg-3 ">
            <ul>
                <li>Thông Tin Tài Khoản</li>
                <li>Giỏ Hàng</li>
                <li>Danh sách ưa thích</li>
            </ul>
         </div>
          <div className="col-lg-3">
            <h2> KHuyến Mãi</h2>
            <span> Đăng Ký thông tin tại đây</span>
            <input type="text" placeholder="NHập Email"/>
            <button>Đăng Ký</button>
            <div className="col-6 footer_icon">
                    <ul>
                        <li>
                            <Link to="fb"> 
                            <FaFacebook />
                            </Link>
                           </li>
                        <li>
                            <Link to="inst">
                            <FaInstagramSquare />
                            </Link>
                            </li>
                        <li>
                            <Link to="mess">
                            <FaFacebookMessenger />
                            </Link>
                        </li>
                        
                        
                    </ul>
                 </div>

          </div>
        </div>
      
      </div>
      </footer>
    )
}
export default memo(Footer);
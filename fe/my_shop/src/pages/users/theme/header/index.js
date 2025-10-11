import {memo, useState} from "react"
import "./style.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import "utils/formatter"
import { FaShoppingCart } from "react-icons/fa";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";
const Header = () => {
   const[menus, setMenus] = useState([{
    name:"Trang Chủ",
    path: ROUTERS.USER.HOME
   },
   {
    name:"Cửa Hàng",
    path: ROUTERS.USER.HOME
   },
   {
    name:"Sản Phẩm",
    path: ROUTERS.USER.PRODUCT,
    isShowSubmenu: false,
    child:[
       {
    name:"THIT",
    path: ROUTERS.USER.HOME
   }, 
    {
    name:"RAU",
    path: ROUTERS.USER.HOME
   }, 
    {
    name:"SỮA",
    path: ROUTERS.USER.HOME
   }, 
    ]
   },
   {
    name:"Bài Viết",
    path: ROUTERS.USER.HOME
   },
   {
    name:"Liên Hệ",
    path: ROUTERS.USER.HOME
   },
]);


    return(
        <>
        <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-6 header_top_left">
                    <ul>
                        <li><CiMail />
                        <span>Hello, @gmail.com</span>
                        </li> 
                        <li>Miến Phí ship hàng đơn từ {formatter( 200)}</li>
                    </ul>
                </div>
                 <div className="col-6 header_top_right">
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
                        <li>
                            <Link to="login">
                            <BsPersonCircle />
                            </Link>
                             <span>Đăng Nhập</span>
                        </li>
                        
                    </ul>
                 </div>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="row">
         <div className="col-xl-3 col-sm-3 ">
            <div className="header_logo">
              <h1>WEBSITE</h1> 
            </div>
            </div>
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <nav className="header_menu">
             <ul>
                {
                    menus?.map((menu,index) =>{
                         return (
                         <li key={index} className={index === 0 ? "active" : ""}>
                           <Link to={menu?.path}
                           >{menu?.name}
                           </Link>
                            
                            {
                                menu.child && (
                                    <ul className="header_menu_dropdown">
                                        {
                                            menu.child.map((item,index) => {
                                                return(
                                               <li key={index}>
                                               <Link to={item.path}>{item.name}</Link>
                                                </li>        
                                                )
                                            })
                                        
                                        }
                                       
                                    </ul>
                                )
                            }
                            
                        </li>
                            )
                    }
                   )
                }
             
             </ul>
            </nav>
          </div>
           <div className="col-xl-3 col-lg-3 col-sm-3">
            <div className="header_cart">
                <div className="header_cart_price">
                 <span>{formatter(100000)}</span>
                </div>
                <ul>
                    <li>
                       
                        <Link to="">
                         <FaShoppingCart /><span>5</span>
                        </Link>
                    </li>
                </ul>
            </div>
           </div>
         <div></div>
        </div>
        </div>
        </>
    )
}
export default memo(Header);
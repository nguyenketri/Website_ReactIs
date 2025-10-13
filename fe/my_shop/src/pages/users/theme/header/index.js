import {memo, useState} from "react"
import { Link } from "react-router-dom";
import './style.scss'
import { SearchOutlined } from "@ant-design/icons";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
   
    return(
        <div className="header">
        <div className="header_top">
           <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% !
            <span><Link to='shop_now'>ShopNow</Link></span>
           </p>
           <select
           defaultValue='vi'
          
           >
            <option value='en'>English</option>
            <option value='vi'>Tiếng Việt</option>
           </select>
        </div>
        <div className="header_container">
        <h1>Exclusive</h1>
       
        <nav>
            <ul className="menu">
                <li><Link to="home" className="active">Home</Link></li>
                <li><Link>Contact</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Sign Up</Link></li>
            </ul>
        </nav>

        <div class="search-box">
       <input type="text" placeholder="What are you looking for..." />
        <span class="icon"><SearchOutlined/></span>
       </div>
       <div className="header_icon">
        <CiHeart  className="style_icon"/>
       <IoCartOutline className="style_icon"/>
       </div>
       
         </div>


       
      
        </div>
    )
}
export default memo(Header);
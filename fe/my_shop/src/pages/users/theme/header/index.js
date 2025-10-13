import { memo, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { SearchOutlined } from "@ant-design/icons";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import AccountMenu from "component/account/menuAccount";
const Header = () => {
    const [activeMenu, setActiveMenu] = useState("home"); // lưu menu active

    const menuItems = [
        { name: "Home", path: "" },
        { name: "Contact", path: "login" },
        { name: "About", path: "about" },
        { name: "Sign Up", path: "signup" },
    ];

    return (
        <div className="header">
            <div className="header_top">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% !
                    <span><Link to='shop_now'>ShopNow</Link></span>
                </p>
                <select defaultValue='vi'>
                    <option value='en'>English</option>
                    <option value='vi'>Tiếng Việt</option>
                </select>
            </div>

            <div className="header_container">
                <h1><Link to="" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Exclusive</Link></h1>

                <nav>
                    <ul className="menu">
                        {menuItems.map(item => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={activeMenu === item.path ? "active" : ""}
                                    onClick={() => setActiveMenu(item.path)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="search-box">
                    <input type="text" placeholder="What are you looking for..." />
                    <span className="icon"><SearchOutlined /></span>
                </div>

                <div className="header_icon">
               <div className="icon_group">
  <p className="cart_number">
   <Link to="cart"> <IoCartOutline className="style_icon" /></Link>
    <span>5</span>
  </p>

  <p className="heart_number">
    <CiHeart className="style_icon" />
    <span>2</span>
  </p>
</div>

                    <AccountMenu/>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);

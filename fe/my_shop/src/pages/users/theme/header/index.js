import { memo, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { SearchOutlined } from "@ant-design/icons";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState("home"); // lưu menu active

    const menuItems = [
        { name: "Home", path: "home" },
        { name: "Contact", path: "contact" },
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
                <h1>Exclusive</h1>

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
                    <CiHeart className="style_icon" />
                    <IoCartOutline className="style_icon" />
                </div>
            </div>
        </div>
    );
};

export default memo(Header);

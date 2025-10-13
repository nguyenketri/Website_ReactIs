import React, { useState, useRef, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./style.scss";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="account-menu" ref={menuRef}>
      {/* Icon tài khoản */}
      <MdAccountCircle
        className="style_icon"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown hiển thị khi click */}
      {open && (
        <div className="dropdown">
          <p className="dropdown-item">My Profile</p>
          <p className="dropdown-item">Account Settings</p>
          <hr />
          <p className="dropdown-item logout">Log Out</p>
        </div>
      )}
    </div>
  );
}

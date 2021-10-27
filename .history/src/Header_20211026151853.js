import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Example } from "./Example.js";
import FindAStore from "./FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logo from "./assets/maskid.jpg";
import { Avatar } from "@material-ui/core";
import { UserSidebar } from "./UserSidebar/UserSidebar";
import { AuthModal } from "./AuthModal/AuthModal";
import { MasjidState } from "./store/Context";

function Header({ menuPage }) {

  const {user} = MasjidState()

  return (
    <div className={`header ${menuPage && "header__menuPage"}`}>
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/" className="header__link">
          Bosh sahifa
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/quran" className="header__link">
          Qur'oni Karim
        </Link>
        <Link to="/courses" className="header__link">
          kurslar
        </Link>
      </div>
      <div className="header__right">
        <Example />
        <FindAStore />
        {user ? <UserSidebar /> : <AuthModal />}
      </div>
    </div>
  );
}

export default Header;

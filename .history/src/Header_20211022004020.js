import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Example } from "./Example.js";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import FindAStore from "./FindAStore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogoutButton from "./LogoutButton";
import Logo from "./assets/maskid.jpg";

function Header({ menuPage }) {
  const user = useSelector(selectUser);

  return (
    <div className={`header ${menuPage && "header__menuPage"}`}>
      <div className="header__left">
        <p className="header__logo" to="/">
          <img src={Logo} alt="" />
        </p>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/" className="header__link">
          Bosh sahifa
        </Link>
        <Link to="/" className="header__link">
          Qur'oni Karim
        </Link>
      </div>
      <div className="header__right">
        <Example />
        <a href="https://maps.app.goo.gl/H3kf5zSPJC9vjmCm9">
          <FindAStore />
        </a>
        {
          <>
            <p>
              <SignInButton />
            </p>
            <p>
              <SignUpButton />
            </p>
          </>
        }
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import Dropdown from "../../../components/dropdown/Dropdown";
import Logo from "../../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const user_menu = [
    {
      content: "Business",
    },
    {
      content: "Developers",
    },
    {
      content: "Community",
    },
    {
      content: "Contact Us",
    },
  ];

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 992
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      setMobileView(false); // This worked for me
    };
  });

  const renderUserToggle = () => <GiHamburgerMenu />;

  const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
      <div className="notification">
        <span>{item.content}</span>
      </div>
    </Link>
  );

  return (
    <div className="team-header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" height={70} />
        </Link>
      </div>
      {!mobileView ? (
        <div className="header-link">
          <Link to="/">
            <div className="h4">Business</div>
          </Link>
          <Link to="/">
            <div className="h4">Developers</div>
          </Link>
          <Link to="/">
            <div className="h4">Community</div>
          </Link>
          <Link to="/">
            <div className="h4">Contact Us</div>
          </Link>
        </div>
      ) : (
        <Dropdown
          customToggle={() => renderUserToggle()}
          contentData={user_menu}
          renderItems={(item, index) => renderUserMenu(item, index)}
        />
      )}
    </div>
  );
};

export default Header;

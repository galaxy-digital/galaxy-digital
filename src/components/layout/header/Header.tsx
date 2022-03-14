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
            content: "Services",
        },
        {
            content: "Solutions",
        },
        {
            content: "Recent Projects",
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
        <a
            href={
                index === 0
                    ? "/#services"
                    : index === 1
                    ? "/#solutions"
                    : index === 2
                    ? "/details"
                    : "#contactus"
            }
            key={index}
        >
            <div className="notification">
                <span>{item.content}</span>
            </div>
        </a>
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
                    <a href="/#services">
                        <div className="h4">Services</div>
                    </a>
                    <a href="/#solutions">
                        <div className="h4">Solutions</div>
                    </a>
                    <Link to="/details">
                        <div className="h4">Recent Projects</div>
                    </Link>
                    <a href="#contactus">
                        <div className="h4">Contact Us</div>
                    </a>
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

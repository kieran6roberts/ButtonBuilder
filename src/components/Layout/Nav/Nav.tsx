import * as React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

const mainNavLinks = [
    {
        href: "/build",
        text: "build"
    },
    {
        href: "/my-buttons",
        text: "my buttons"
    }
];

const Nav = () => (
    <nav className="nav">
        <div className="nav__brand">
            <Link className="nav__brand-link" to="/">
                <img alt="" className="nav__brand-logo" height="40px" src="android-chrome-192x192.png" width="40px" />
                <span className="nav__brand-title" >Button Builder</span>
                <span className="nav__brand-name">By Kieran Roberts</span>
            </Link>
        </div>
        <div className="nav__links-wrapper">
            <NavLinks links={mainNavLinks} />
        </div>
    </nav>
)

export default Nav;
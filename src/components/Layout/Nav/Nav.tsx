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
            <Link to="/">
                <img alt="" height="50px" src="android-chrome-192x192.png" width="50px" />
                <span className="nav__title" >Button Builder</span>
            </Link>
        </div>
        <div className="nav__links-wrapper">
            <NavLinks links={mainNavLinks} />
        </div>
    </nav>
)

export default Nav;
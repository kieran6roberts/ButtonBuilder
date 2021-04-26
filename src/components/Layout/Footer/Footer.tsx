import * as React from "react";
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

const Footer = () => (
    <footer className="footer">
        <NavLinks links={mainNavLinks} />
    </footer>
)

export default Footer;
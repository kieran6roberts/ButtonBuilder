import * as React from "react";
import { RiTwitterFill } from "react-icons/ri";
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
        <p className="footer__me">ButtonBuilder built by <RiTwitterFill className="footer__me--twitter" /><a className="footer__me-link" href="https://twitter.com/Kieran6dev">@Kieran6dev</a>, @2021.</p>
        <NavLinks links={mainNavLinks} />
    </footer>
)

export default Footer;
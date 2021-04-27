import * as React from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { CustomLinkArray } from "../../../lib/types/links";

interface NavLinkProps {
    links: CustomLinkArray
}

const NavLinks = ({ links }: NavLinkProps) => (
    <ul className="links">
        {links.map(({href, text}) => (
            <li className="links__item" key={uuid()}>
                <Link className="links__link" to={href}>
                    {text}
                </Link>
            </li>
        ))}
    </ul>
)

export default NavLinks;
import * as React from "react";

interface ButtonWrapperProps {
    children: JSX.Element
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => (
    <li className="button-wrapper">
        {children}
    </li>
)

export default ButtonWrapper
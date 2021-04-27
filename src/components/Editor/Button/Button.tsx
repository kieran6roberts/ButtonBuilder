import * as React from "react";

const defaultButtonProps = {
    text: "Button",
}

const Button = ({ styles } = { styles: defaultButtonProps }) => (
    <button className="button-output">
        {styles.text}
    </button>
)

export default Button;
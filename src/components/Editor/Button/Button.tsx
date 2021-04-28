import * as React from "react";
import { connect } from "react-redux";

/*
const defaultButtonProps = {
    text: "Button",
}*/

const Button = ({ color }) => {
    return (
        <button className="button-output" style={{
            background: `${color}`
        }}
        >
            Button
        </button>
    )
};

function mapStateToProps(state) {
    return {
        color: state?.buildReducer?.color
    }
}

export default connect(mapStateToProps)(Button);
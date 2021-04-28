import * as React from "react";
import { connect } from "react-redux";
//import * as buildActions from "../../../redux/actions/buildActions";

/*
const defaultButtonProps = {
    text: "Button",
}*/

const Button = ({ color }) => {
    //console.log(props);
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
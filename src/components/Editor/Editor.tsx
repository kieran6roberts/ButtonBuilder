import * as React from "react";
import { connect } from "react-redux";
import { TwitterPicker } from "react-color";
import * as buildActions from "../../redux/actions/buildActions";

interface EditorState {
    buttonStyle: {
        color: string;
    }
}

interface EditorProps {
    color: string;
    dispatch: (input: any) => void;
}

class Editor extends React.Component<EditorProps, EditorState> {
    constructor(props) {
        super(props);

        this.state = {
            buttonStyle: {
                color: "fff"
            }
        }
    }

    handleBackgroundColorChange(color: { hex: string }) {
        this.props.dispatch(buildActions.changeButtonBackground(this.state.buttonStyle))
        this.setState({
            ...this.state.buttonStyle,
            buttonStyle: {
                color: color.hex
            }
        })

        console.log(this.state.buttonStyle)
    }

    render() {
        return (
            <div className="editor">
                <h3>Pick a background color</h3>
                <TwitterPicker 
                color={this.state.buttonStyle.color} 
                onChangeComplete={this.handleBackgroundColorChange.bind(this)} 
                />
                <p>{this.props.color}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state.color
    }
}

export default connect(mapStateToProps)(Editor);
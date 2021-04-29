import * as React from "react";
import { connect } from "react-redux";
import { TwitterPicker } from "react-color";
import * as buildActions from "../../redux/actions/buildActions";


interface EditorProps {
    color: string;
}

interface EditorActionProps {
    updateBackgroundColor: (color: string) => void;
}

class Editor extends React.Component<EditorProps & EditorActionProps> {
    componentDidMount() {
        this.props.updateBackgroundColor(this.props.color ?? "fff");
    }

    handleBackgroundColorChange(color: { hex: string }) {
        this.props.updateBackgroundColor(color.hex);
    }

    render() {
        return (
            <div className="editor">
                <p className="editor__bg">Background color</p>
                <TwitterPicker 
                color={this.props.color} 
                onChangeComplete={this.handleBackgroundColorChange.bind(this)} 
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state?.buildReducer?.color
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateBackgroundColor: (color: string) => dispatch(buildActions.changeButtonBackground(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
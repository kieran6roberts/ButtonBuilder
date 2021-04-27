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
    }

    componentDidMount() {
        this.props.dispatch(buildActions.changeButtonBackground({ color: "fff"}))

    }

    handleBackgroundColorChange(color: { hex: string }, { target }) {
        const newColor = target.title || target.value;
        this.props.dispatch(buildActions.changeButtonBackground({ color: newColor }));
    }

    render() {
        return (
            <div className="editor">
                <h3>Pick a background color</h3>
                <TwitterPicker 
                color={this.props.color} 
                onChangeComplete={this.handleBackgroundColorChange.bind(this)} 
                />
                <p>{this.props.color}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        color: state?.buildReducer?.color?.color
    }
}

export default connect(mapStateToProps)(Editor);
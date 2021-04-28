import * as React from "react";
import Layout from "../Layout/Layout";
import Button from "../Editor/Button/Button";
import Editor from "../Editor/Editor";
import { connect } from "react-redux";
import * as buildActions from "../../redux/actions/buildActions";

interface BuilPageProps {
    resetStyles: () => void;
}

class BuildPage extends React.Component<BuilPageProps> {
    constructor(props) {
        super(props);
    }
    
    handleStyleReset() {
        this.props.resetStyles();
    }
    
    render() {
        return (
            <Layout>
                <section className="build">
                    <div className="build__container">
                        <div className="build__output">
                            <Button />
                            <div className="build__output-btns">
                                <button aria-label="Save this button" className="build__output-save">
                                    Save
                                </button>
                                <button aria-label="Reset this button" className="build__output-save" onClick={this.handleStyleReset.bind(this)}>
                                    Reset
                                </button>
                            </div>
                        </div>
                        <div className="build__editor">
                            <h2 className="build__editor-heading">Editor</h2>
                            <Editor />
                        </div>
                    </div>
                </section>
            </Layout>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resetStyles: () => dispatch(buildActions.changeButtonBackground("#fff"))
    }
}

export default connect(null, mapDispatchToProps)(BuildPage);
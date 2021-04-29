import * as React from "react";
import Layout from "../Layout/Layout";
import Button from "../Editor/Button/Button";
import Editor from "../Editor/Editor";
import { connect } from "react-redux";
import * as buildActions from "../../redux/actions/buildActions";

interface BuilPageProps {
    color: string;
    resetStyles: () => void;
}

interface BuildPageState {
    isSaveDisabled: boolean;
}

class BuildPage extends React.Component<BuilPageProps, BuildPageState> {

    state = {
        isSaveDisabled: false
    }

    getLocalStorage() {
        const currentStorage = localStorage.getItem("buttons");
        return currentStorage ? JSON.parse(currentStorage) : [];
    }

    componentDidMount() {
        const storage = this.getLocalStorage();
        this.setState({ ...this.state, isSaveDisabled: storage?.length >= 9 ? true : false })
    }
    
    handleStyleReset() {
        this.props.resetStyles();
    }

    handleButtonSave() {
        const storage = this.getLocalStorage();
        const item = {
            id: storage.length + 1,
            color: this.props.color
        }
        
        if (storage.length === 0) {
            localStorage.setItem("buttons", JSON.stringify([item]));
        } else if (storage.length <= 9) {
            localStorage.setItem("buttons", JSON.stringify([...storage, item]));
        }

        this.setState({...this.state, isSaveDisabled: storage?.length >= 9 ? true : false })
    }
    
    render() {
        return (
            <Layout>
                <section className="build">
                    <div className="build__container">
                        <div className="build__output">
                            <Button />
                            <div className="build__output-btns">
                                <button aria-label="Save this button" className="build__output-save" disabled={this.state.isSaveDisabled} onClick={this.handleButtonSave.bind(this)}>
                                    {this.state.isSaveDisabled ? "Save limit: 10" : "Save"}
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

function mapStateToProps(state){
    return {
        color: state?.buildReducer?.color
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resetStyles: () => dispatch(buildActions.changeButtonBackground("#fff"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildPage);
import * as React from "react";
import Layout from "../Layout/Layout";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import { IoTrashOutline } from "react-icons/io5";

interface MyButtonsPageState {
    buttons: { readonly id: string, color: string }[]
}

class MyButtonsPage extends React.Component {
    state: MyButtonsPageState = {
        buttons: []
    }

    getLocalStorage() {
        const currentStorage = localStorage.getItem("buttons");
        return currentStorage ? JSON.parse(currentStorage) : [];
    }

    setLocalStorage(items) {
        localStorage.setItem("buttons", JSON.stringify(items));
    }

    updateStateFromStorage() {
        this.setState({ ...this.state, buttons: [...this.getLocalStorage()] })
    }

    componentDidMount() {
        this.updateStateFromStorage();
    }

    deleteSavedButton(id) {
        const updatedButtons = this.state.buttons.filter((btn => btn.id !== id));
        this.setState({ ...this.state, buttons: updatedButtons });
        this.setLocalStorage(updatedButtons);
    }


    render() {
        console.log(this.state)
        return (
            <Layout>
                {this.state.buttons.length ? 
                <ul className="my-buttons">
                    {this.state.buttons.map(({ id, color }) => (
                        <ButtonWrapper key={uuid()}>
                            <>
                            <IoTrashOutline className="my-buttons__delete" onClick={this.deleteSavedButton.bind(this, id)} />
                            <button className="my-buttons__button button-output" style={{ background: `${color}`}}>
                                button
                            </button>
                            </>
                        </ButtonWrapper>
                    ))}
                </ul>
                :
                <>
                <p className="my-buttons__none">Currently no saved buttons</p>
                <Link className="my-buttons__link-build" to="/build">build buttons</Link>
                </>
            }
            </Layout>
        )
    }
}

export default MyButtonsPage;
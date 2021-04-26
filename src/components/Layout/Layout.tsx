import * as React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Nav />
                    <main className="main-content">
                        {this.props.children}
                    </main>
                <Footer />
            </div>
        )
    }
}

export default Layout;
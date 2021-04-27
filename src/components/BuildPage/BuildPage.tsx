import * as React from "react";
import Layout from "../Layout/Layout";

const BuildPage = () => (
    <Layout>
        <section className="build">
            <div className="build__container">
                <div className="build__output"></div>
                <div className="build__editor">
                    <h2 className="build__editor-heading">Editor</h2>
                </div>
            </div>
        </section>
    </Layout>
)

export default BuildPage;
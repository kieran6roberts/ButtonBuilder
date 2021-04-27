import * as React from "react";
import Layout from "../Layout/Layout";
import Button from "../Editor/Button/Button";
import Editor from "../Editor/Editor";

const BuildPage = () => (
    <Layout>
        <section className="build">
            <div className="build__container">
                <div className="build__output">
                    <Button styles={{ text: "button" }}/>
                </div>
                <div className="build__editor">
                    <h2 className="build__editor-heading">Editor</h2>
                    <Editor />
                </div>
            </div>
        </section>
    </Layout>
)

export default BuildPage;
import * as React from "react";
import Layout from "../Layout/Layout";
import Button from "../Editor/Button/Button";
import Editor from "../Editor/Editor";

const BuildPage = () => (
    <Layout>
        <section className="build">
            <div className="build__container">
                <div className="build__output">
                    <Button />
                    <div className="build__output-btns">
                        <button aria-label="Save this button" className="build__output-save">
                            Save
                        </button>
                        <button aria-label="Reset this button" className="build__output-save">
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

export default BuildPage;
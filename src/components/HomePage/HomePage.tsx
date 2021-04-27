import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = () => (
    <Layout>
        <h1 className="home__main-heading">Build - <span className="home__main-heading--sec">Customize</span> - <span className="home__main-heading--ter">Save</span></h1>
        <h2 className="home__secondary-heading">Button Builder</h2>
        <Link className="home__cta" to="/build">
            Start Building
        </Link>
    </Layout>
);

export default HomePage;
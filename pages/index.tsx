import * as React from "react";
import { NextPage } from "next";
import App from "../components/App";
import Layout from "../components/Layout/Layout";
import { withApollo } from "../lib/withApollo";

const IndexPage: NextPage = () => (
  <Layout>
    <App />
  </Layout>
);

export default withApollo(IndexPage);

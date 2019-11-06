import * as React from "react";
import { NextPage } from "next";
import App from "../components/App";
import Layout from "../components/Layout";
import { withApollo } from "../lib/withApollo";

const IndexPage: NextPage = () => (
  <Layout title="React + Next boilerplate">
    <App />
  </Layout>
);

export default withApollo(IndexPage);

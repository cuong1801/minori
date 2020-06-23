import React, { Component } from "react";
import "antd/dist/antd.css";
import OrderHeader from "./OrderHeader";
import OrderBody from "./OrderBody";

import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "antd";

const { Header } = Layout;

class Order extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "50vh" }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <OrderHeader></OrderHeader>
            <OrderBody></OrderBody>
          </Header>
        </Layout>
      </Router>
    );
  }
}

export default Order;

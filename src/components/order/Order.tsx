import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import OrderHeader from "./OrderHeader";
import OrderBody from "./OrderBody";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
// import { IOrder } from "../../interfaces/IOrder";
const { Header } = Layout;

export default function Index() {
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

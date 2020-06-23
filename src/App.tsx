import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WalletOutlined } from "@ant-design/icons";
import Order from "./components/order/Order";
const { Content, Footer, Sider } = Layout;
class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<WalletOutlined />}>
                Đơn hàng
                <Link to="/order" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Switch>
                <Route exact path="/order" component={Order} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Copyright © 2019 S-CHANCE
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;

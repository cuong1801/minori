import React, { Component } from "react";
import { PageHeader } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const routes = [
  {
    path: "order",
    breadcrumbName: "Danh sách đơn hàng",
  },
];
class OrderHeader extends Component {
  render() {
    return (
      <Router>
        <PageHeader
          className="site-page-header"
          title="Danh sách đơn hàng"
          breadcrumb={{ routes }}
        />
          <Row className="ant-row-style">
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              <Title level={3}>h3. Ant Design</Title>
            </Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
              Col
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
              Col
            </Col>
          </Row>
      </Router>
    );
  }
}

export default OrderHeader;

import React, { Component, useState, useEffect } from "react";
import { PageHeader } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Typography } from "antd";
import "../../css/order.css";
import { Select } from "antd";
import { ICompany} from "../../interfaces/ICompany"
const { Option } = Select;
interface Company {
  _id: string;
  name: string;
}
const Company = [
  {
    _id: 232132132,
    name: "minori",
  },
];
//select option
//select option
const { Title } = Typography;
const routes = [
  {
    path: "order",
    breadcrumbName: "Danh sách đơn hàng",
  },
];

//select option
const OrderHeader = (): JSX.Element => {
  return (
    <Router>
      <PageHeader
        className="site-page-header"
        title="Danh sách đơn hàng"
        breadcrumb={{ routes }}
      />
      <Row className="ant-row-style">
        <Col span={6}>
          <Title className="margin-top" level={4}>
            Tìm thấy XX đơn hàng
          </Title>
        </Col>
        <Col span={6}>
          <Select
            className="select-marginleft margin-top"
            defaultValue="lucy"
            allowClear
          >
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={6}>
          {" "}
          <Select
            className="select-marginleft margin-top"
            defaultValue="lucy"
            allowClear
          >
            <Option value="lucy">Lucy</Option>
          </Select>
        </Col>
        <Col span={6}>
          {" "}
          <Select
            className="select-marginleft margin-top"
            defaultValue="lucy"
            allowClear
          >
            <Option value="lucy">Lucy</Option>
          </Select>{" "}
        </Col>
      </Row>
    </Router>
  );
};

export default OrderHeader;

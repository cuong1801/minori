import React, { Component, useState, useEffect } from "react";
import { PageHeader } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Typography } from "antd";
import "../../css/order.css";
import { Select } from "antd";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

// import { ICompany } from "../../interfaces/ICompany";

const { Option } = Select;

function onChange(value:any) {
  console.log(value);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val: any) {
  console.log("search:", val);
}
interface Company {
  _id: string;
  name: string;
}
const Company = [
  {
    _id: 2313123123123,
    name: "minori",
  },
  {
    _id: 23211232131231231232132,
    name: "Axon",
  },
  {
    _id: 232133123123123132132,
    name: "fsoft",
  },
];
const Product = [
  {
    _id: 232132132,
    name: "Yến xào",
  },
  {
    _id: 232132132,
    name: "Yến luộc",
  },
  {
    _id: 232132132,
    name: "Yến hấp",
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
      <Row className="ant-row-style">
        <Col span={6}>
          <Title className="margin-top" level={4}>
            Tìm thấy 2 đơn hàng
          </Title>
        </Col>

        <Col span={6}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Không chọn"
            optionFilterProp="children"
            onChange={(e) => onChange(e)}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            <Option value="Không chọn">Không chọn</Option>

            {Company.map((company) => {
              return (
                <>
                  <Option value={company._id}>
                    {company.name}
                  </Option>
                </>
              );
            })}
          </Select>
          ,
        </Col>
        <Col span={6}>
          {" "}
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Không chọn"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            <Option value="Không chọn">Không chọn</Option>

            {Product.map((product) => {
              return (
                <>
                  <Option value={product.name}>{product.name}</Option>
                </>
              );
            })}
          </Select>
        </Col>
        <Col span={6}>
          {" "}
          <RangePicker />
        </Col>
      </Row>
    </Router>
  );
};

export default OrderHeader;

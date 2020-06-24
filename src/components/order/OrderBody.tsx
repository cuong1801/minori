import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import "../../scss/OrderBody.scss";
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: "Khách Hàng",
    dataIndex: "fullName",
    key: "fullName",
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: "Sản phẩm",
    dataIndex: "products",
    key: "products",
    render: (products: any[]) => (
      <>
        {products.map((product) => {
          return (
            <div>
              <div>
                <a className="product">{product}</a>
              </div>
              <hr/>
              Tổng tiền:
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: { fullName: React.ReactNode }) => (
      <Space size="middle">
        <a>Invite {record.fullName}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: "Thành tiền SP",
    dataIndex: "totalAmout",
    key: "totalAmout",
  },
  {
    title: "Ủng hộ của SP",
    dataIndex: "totalDonate",
    key: "totalDonate",
  },
  {
    title: "Ngày mua",
    dataIndex: "insertTime",
    key: "insertTime",
  },
];

const data = [
  {
    stt: "1",
    fullName: "John Brown",
    products: ["yến xàossssssssssssssssss sssssssssss"],
    status: "Đã thanh toán",
    tags: ["nice", "developer"],
  },
  {
    stt: "2",
    fullName: "Jim Green",
    products: ["yến xào", "vịt lộn", "tiết canh"],
    status: "Đã thanh toán",

    tags: ["loser"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
  {
    stt: "3",
    fullName: "Joe Black",
    products: ["yến xào", "vịt lộn", "tiết canh"],

    status: "Đã thanh toán",

    tags: ["cool", "teacher"],
  },
];
class OrderBody extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

export default OrderBody;

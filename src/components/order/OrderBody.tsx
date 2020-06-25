import React, { Component, Fragment } from "react";
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
        <div className="products-order">
          <div className="products">
            {products.map((product) => {
              return (
                <div>
                  <a className="product">{product.name}</a>
                  <span className="count-price">
                    <span className="count">{product.quantity} </span>x
                    <span className="price">
                      {product.price}
                      <span>đ</span>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="money-order">
          <label>Tổng tiền:</label>
        </div>
      </>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "products",
    key: "status",
    render: (products: any[]) => (
      <>
        <div className="products-status-order">
          <div className="products-status">
            {products.map((product) => {
              return (
                <div>
                  <div className="product-status">
                    <Tag
                      className="is-payment"
                      color={product.isPayment === true ? "#87d068" : "green"}
                    >
                      {product.isPayment === true
                        ? "Đã chuyển tiền"
                        : "Chưa thanh toán"}
                    </Tag>
                    <Tag
                      className="is-delivery"
                      color={product.isDelivery === true ? "#108ee9" : "blue"}
                    >
                      {product.isPayment === true
                        ? "Đã giao hàng"
                        : "Chưa giao hàng"}
                    </Tag>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-status-order"></div>
      </>
    ),
  },
  {
    title: "Chức năng",
    dataIndex: "products",
    key: "action",
    render: (products: any[]) => (
      <>
        <div className="products-action-order">
          <div className="products-action">
            {products.map((product) => {
              return (
                <div>
                  <div className="product-action">
                    <Tag
                      className="is-payment"
                      color={product.isPayment === true ? "" : "red"}
                      style={{
                        border: product.isPayment === true ? "0px" : "",
                      }}
                    >
                      {product.isPayment === false ? "Thanh toán" : ""}
                    </Tag>
                    <Tag
                      className="is-delivery"
                      color={product.isDelivery === true ? "" : "blue"}
                      style={{
                        border: product.isDelivery === true ? "0px" : "",
                      }}
                    >
                      {product.isDelivery === false ? "Giao hàng" : ""}
                    </Tag>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-action-order"></div>
      </>
    ),
  },
  {
    title: "Thành tiền SP",
    dataIndex: ["products", "totalAmount"],
    key: "totalAmout",
    render: (_: any, order: any) => {
      return (
        <>
          <div className="products-price-order">
            <div className="products-price">
              {order.products.map((product: any) => {
                return (
                  <div>
                    <span className="product-price">{product.totalAmount}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="money-total-order">
            <span className="total-order">{order.totalAmount}</span>
          </div>
        </>
      );
    },
  },
  {
    title: "Ủng hộ của SP",
    dataIndex: ["products", "totalDonate"],
    key: "totalDonate",
    render: (_: any, order: any) => {
      return (
        <>
          <div className="products-price-order">
            <div className="products-price">
              {order.products.map((product: any) => {
                return (
                  <div>
                    <span className="product-price">{product.totalDonate}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="money-total-order">
            <span className="total-order">{order.totalDonate}</span>
          </div>
        </>
      );
    },
  },
  {
    title: "Ngày mua",
    dataIndex: "insertTime",
    key: "insertTime",
  },
];
// const order= [];
const data = [
  {
    stt: "1",
    userId: "5ef2bea1747b466339c256bd",
    fullName: "sdsd",
    products: [
      {
        productId: "5ef2bd235822e0cc04d0e848",
        companyId: "5ef2bc199c7d4d9feb0f5c6d",
        name: "Yến hồng loại I (100 g)",
        price: 5841000,
        quantity: 2,
        promotionRate: 5,
        donateRate: 15,
        totalAmount: 11682000,
        totalDonate: 1752300,
        isPayment: true,
        isDelivery: true,
        isCancel: false,
      },
      {
        productId: "5ef2bd535822e0cc04d0e849",
        companyId: "5ef2bc199c7d4d9feb0f5c6d",
        name: "Yến hồng loại I (100 g)",
        price: 5841000,
        quantity: 2,
        promotionRate: 5,
        donateRate: 15,
        totalAmount: 11682000,
        totalDonate: 1752300,
        isPayment: false,
        isDelivery: true,
        isCancel: true,
      },
    ],
    status: "pending",
    totalAmount: 1111111,
    totalDonate: 1752300,
    insertTime: 1593055968,
  },
];

class OrderBody extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}

export default OrderBody;

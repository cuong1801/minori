import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Popconfirm } from "antd";
import "../../css/OrderBody.css";
import axios from "axios";
import { IOrder } from "../../interfaces/IOrder";
import { ICompany } from "../../interfaces/ICompany";

import { DeleteOutlined } from "@ant-design/icons";
// const company = [
//   { value: "5ef2bc199c7d4d9f2eb0f5c6d", text: "YẾN SÀO BẢO TRÂN" },
//   { value: "5ef2bc199c7d4d9feb20f5c6d", text: "YẾN SÀO BẢO TRÂN" },
// ];
const product = [
  {
    value: "5ef2bd235822e0cc04d0e848",
    text: "Yến hồng loại I (100 g)",
  },
  {
    value: "5ef2bd235822e0cc04d0e849",
    text: "Yến hồng loại I (50 g)",
  },
];
const columns: any = [
  {
    title: "STT",
    dataIndex: "_id",
    key: "_id",

    render: (_: any, _id: React.ReactNode, index: number) => (
      <a href={"/order/detail/" + _id}>
        <h1>{index + 1}</h1>
      </a>
    ),
  },
  {
    title: "Khách Hàng",
    dataIndex: "customer",
    key: "customer",
    render: (customer: any) => (
      <div>
        <a href={"/user/detail/" + customer._id}>
          <h1>{customer.fullName}</h1>
        </a>
      </div>
    ),
  },
  {
    title: "Sản phẩm",
    dataIndex: "products",
    key: "products",
    filters: product,
    onFilter: (value: any, record: { products: any[] }) => {
      console.log(value);
      console.log('object :>> ', record.products.filter((product, index) => product.productId === value).length);
      return record.products.filter((product, index) => product.productId === value).length === 1;
    },
    render: (products: any[]) => (
      <>
        <div className="products-order">
          <div className="products">
            {products.map((product) => {
              return (
                <div>
                  <a
                    href={"/product/detail/" + product._id}
                    className="product"
                  >
                    {product.name}
                  </a>
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
                  <div
                    className="product-status"
                    // style={{
                    //   display:
                    //     product.isCancel === true ? "none" : "block-inline",
                    // }}
                  >
                    {product.isCancel ? (
                      <>Đã hủy</>
                    ) : (
                      <>
                        <Tag
                          className="is-payment"
                          color={
                            product.isPayment === true ? "#87d068" : "green"
                          }
                        >
                          {product.isPayment === true
                            ? "Đã chuyển tiền"
                            : "Chưa thanh toán"}
                        </Tag>
                        <Tag
                          className="is-delivery"
                          color={
                            product.isDelivery === true ? "#108ee9" : "blue"
                          }
                        >
                          {product.isDelivery === true
                            ? "Đã giao hàng"
                            : "Chưa Giao hàng"}
                        </Tag>
                      </>
                    )}
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
                    {product.isCancel ? (
                      <>
                        <span style={{ width: "102px" }}>____</span>
                      </>
                    ) : (
                      <>
                        <Popconfirm
                          title="Mặt hàng này đã thanh toán?"
                          okText="Yes"
                          cancelText="No"
                        >
                          <Tag
                            className="is-payment"
                            color={product.isPayment === true ? "" : "red"}
                            style={{
                              border: product.isPayment === true ? "0px" : "",
                            }}
                          >
                            {product.isPayment === false ? "Thanh toán" : ""}
                          </Tag>
                        </Popconfirm>
                        <Popconfirm
                          title="Đã giao sản phẩm này?"
                          okText="Yes"
                          cancelText="No"
                        >
                          <Tag
                            className="is-delivery"
                            color={product.isDelivery === true ? "" : "blue"}
                            style={{
                              border: product.isDelivery === true ? "0px" : "",
                            }}
                          >
                            {product.isDelivery === false ? "Giao hàng" : ""}
                          </Tag>
                        </Popconfirm>
                        <Popconfirm
                          title="Hủy mặt hàng này?"
                          okText="Yes"
                          cancelText="No"
                        >
                          <Tag
                            className="cancel-order"
                            style={{
                              display:
                                product.isPayment === true ||
                                product.isDelivery === true
                                  ? "none"
                                  : "block-inline",
                            }}
                          >
                            <DeleteOutlined
                              className="cancel-order"
                              style={{
                                border: product.isCancel === true ? "0px" : "",
                              }}
                            />
                          </Tag>
                        </Popconfirm>
                      </>
                    )}
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
    dataIndex: "totalAmount",
    key: "totalAmout",
    filters: [
      {
        value: 14647500,
        text: 14647500,
      },
    ],
    // defaultSortOrder: 'descend',
    onFilter: (value: any, record: any) => {
      console.log(record, value);
      return record.totalAmount.indexOf(value) === 0;
    },

    sorter: (a: any, b: any) => a.totalAmount - b.totalAmount,
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
                    {product.isCancel ? (
                      <>
                        <span className="product-price">____</span>
                      </>
                    ) : (
                      <>
                        <span className="product-price">
                          {product.totalDonate}
                          <span>đ</span>
                        </span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="money-total-order">
            <span className="total-order">
              {order.totalDonate}
              <span>đ</span>
            </span>
          </div>
        </>
      );
    },
  },
  {
    title: "Ngày mua",
    dataIndex: "orderDate",
    key: "orderDate",
  },
];
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}
// const data = [
//   {
//     _id: "5ef5a495224cb8ba206f7299",
//     customer: {
//       _id: "5ef455f5d5492e117a09e4b5",
//       fullName: "Nguyễn Quốc Cường",
//     },
//     products: [
//       {
//         productId: "5ef2bd235822e0cc04d0e848",
//         name: "Yến hồng loại I (100 g)",
//         price: 5841000,
//         quantity: 2,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 11682000,
//         totalDonate: 1752300,
//         isPayment: false,
//         isDelivery: true,
//         isCancel: true,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//       {
//         productId: "5ef2bd235822e0cc04d0e849",
//         name: "Yến hồng loại I (50 g)",
//         price: 2965500,
//         quantity: 1,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 2965500,
//         totalDonate: 444825,
//         isPayment: true,
//         isDelivery: true,
//         isCancel: false,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//       {
//         productId: "5ef2bd235822e0cc04d0e848",
//         name: "Yến hồng loại I (100 g)",
//         price: 5841000,
//         quantity: 2,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 11682000,
//         totalDonate: 1752300,
//         isPayment: false,
//         isDelivery: false,
//         isCancel: true,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//     ],
//     status: "pending",
//     totalAmount: 14647500,
//     totalDonate: 2197125,
//     orderDate: "2020-06-25",
//   },
//   {
//     _id: "5ef5a495224cb8ba206f7299",
//     customer: {
//       _id: "5ef455f5d5492e117a09e4b5",
//       fullName: "Đặng Quốc Cường",
//     },
//     products: [
//       {
//         productId: "5ef2bd235822e0cc04d0e848",
//         name: "Yến hồng loại I (100 g)",
//         price: 5841000,
//         quantity: 2,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 11682000,
//         totalDonate: 1752300,
//         isPayment: true,
//         isDelivery: false,
//         isCancel: false,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//       {
//         productId: "5ef2bd235822e0cc04d0e849",
//         name: "Yến hồng loại I (50 g)",
//         price: 2965500,
//         quantity: 1,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 2965500,
//         totalDonate: 444825,
//         isPayment: false,
//         isDelivery: true,
//         isCancel: false,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//       {
//         productId: "5ef2bd235822e0cc04d0e848",
//         name: "Yến hồng loại I (100 g)",
//         price: 5841000,
//         quantity: 2,
//         promotionRate: 5,
//         donateRate: 15,
//         totalAmount: 11682000,
//         totalDonate: 1752300,
//         isPayment: false,
//         isDelivery: false,
//         isCancel: true,
//         company: {
//           _id: "5ef2bc199c7d4d9feb0f5c6d",
//           name: "YẾN SÀO BẢO TRÂN",
//         },
//       },
//     ],
//     status: "pending",
//     totalAmount: 14647500,
//     totalDonate: 2197125,
//     orderDate: "2020-06-25",
//   },
// ];
export default function OrderBody() {
  const [orders, setOrder] = useState<IOrder[]>([]);
  const [companys, setCompany] = useState<ICompany[]>([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.15:3000/api/order")
      .then((response) => {
        setOrder(response.data.data.orders);
        // console.log(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://192.168.1.24:3000/api/company")
      .then((response) => {
        setCompany(response.data.data.companys);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(companys);

  return (
    <Table
      columns={columns}
      dataSource={orders}
      bordered
      scroll={{ x: true, y: 1000 }}
      onChange={onChange}
    />
  );
}

// import { IRole } from "./IRole";

export interface IOrder {
  customer: any[];
  products: any[];
  status: string;
  totalAmount: number;
  totalDonate: number;
  order: string;
}
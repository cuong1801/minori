import { IRole } from "./IRole";

export interface IUser {
    _id: string;
    name: string;
    birthday: string;
    tel: string;
    email: string;
    role: IRole;
}
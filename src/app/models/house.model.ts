import { IuserModel } from './user.model';

export  interface IhouseModel {
    id: number;
    city: string;
    street: string;
    price: number;
    owner: IuserModel;
}

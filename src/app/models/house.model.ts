import { IuserModel } from './user.model';

export  interface IhouseModel {
    id: number;
    city: string;
    street: string;
    rooms: number;
    owner: IuserModel;
}

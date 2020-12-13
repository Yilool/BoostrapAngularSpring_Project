import { Product } from './product';

export interface Customer {
    cusId?: number;
    cusName: string;
    cusSurname: string;
    cusProducts?: Product[];
}
import { Product } from './product';

export interface Customer {
    cusName: string;
    cusSurname: string;
    cusProducts?: Product[];
}
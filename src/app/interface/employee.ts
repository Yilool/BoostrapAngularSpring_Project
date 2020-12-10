import { Product } from './product';

export interface Employee {
    empName: string;
    empSurname: string;
    empProducts?: Product[];
}
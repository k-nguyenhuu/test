export interface IUser {
    isEmployee: boolean;
    isAffiliate: boolean;
    membershipFrom: number;
}
export interface IProduct {
    name: string;
    type: string;
    price: number;
}
export declare enum discountOption {
    Employee = 30,
    Affiliate = 10,
    Over2years = 5
}

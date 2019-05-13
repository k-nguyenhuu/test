import { IUser, IProduct, discountOption } from "./models";
export declare class Checkout {
    user: IUser;
    products: IProduct[];
    option: discountOption;
    constructor(user: IUser, products: IProduct[], option: discountOption);
    getGrossPrice(products: IProduct[]): number;
    discountOnCashSum(priceSum: number): number;
    discountPercent(product: IProduct): discountOption | 0;
    netPrice(): any;
}

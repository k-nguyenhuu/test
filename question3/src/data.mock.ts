import { IUser, discountOption, IProduct } from "./models";

export const MOCK_USER: IUser = {
  isEmployee: true, //30% discount
  isAffiliate: true, //10% discount
  membershipFrom: 2 //5% discount
};

export const MOCK_PRODUCTS: IProduct[] = [
  {
    name: "orange",
    type: "groceries",
    price: 3
  },
  {
    name: "watch",
    type: "tech",
    price: 40
  }
];

export const MOCK_OPTION: discountOption = discountOption.Employee;

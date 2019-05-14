export interface IUser {
  isEmployee: boolean, //30% discount
  isAffiliate: boolean, //10% discount
  membershipFrom: number //5% discount
};

export interface IProduct {
  name: string,
  type: string,
  price: number
};
export enum discountOption {
  Employee   = 30,
  Affiliate  = 10,
  Over2years = 5,
  NotInRange = 0
};

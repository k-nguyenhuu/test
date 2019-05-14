import {
  IUser,
  IProduct,
  discountOption,
} from "./models";

import {
  MOCK_PRODUCTS,
  MOCK_USER,
  MOCK_OPTION_EMPLOYEE
} from "./data.mock";

export class Checkout {
  //field
  user: IUser;
  products: IProduct[];
  option: discountOption;

  //constructor
  constructor(user: IUser, products: IProduct[], option: discountOption) {
    this.user = user;
    this.products = products;
    this.option = option;
  }
  getGrossPrice(products: IProduct[]) {
    return products.map(x => x.price).reduce((sum, item) => sum + item, 0);
  }

  discountOnCashSum(priceSum: number): number {
    const cashDiscount = Math.floor(priceSum/100)*5;
    return priceSum - cashDiscount;
  }

  discountPercent(product: IProduct): number {
    if (product.type == "groceries") return 0;
    switch (this.option) {
      case discountOption.Employee: {
        if (this.user.isEmployee) return discountOption.Employee;
      }
      case discountOption.Affiliate: {
        if (this.user.isAffiliate) return discountOption.Affiliate;
      }
      case discountOption.Over2years: {
        if (this.user.membershipFrom > 2) return discountOption.Over2years;
      }
      default: { return discountOption.NotInRange; }
    }
  }

  netPrice(): any {
    const iList = this.products.map(item => {
      const discountNumber =  this.discountPercent(item);
      return {...item, price:  item.price*(100 - discountNumber)/100}
    });

    const grossAmount = this.getGrossPrice(iList);
    const nestPrice = this.discountOnCashSum(grossAmount);
    return nestPrice;
  }
}

const cc = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_EMPLOYEE);
console.log("net price", cc.netPrice());

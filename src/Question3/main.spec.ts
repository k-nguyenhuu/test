import { Checkout } from './main'
import { MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_EMPLOYEE, MOCK_OPTION_AFFILIATE, MOCK_OPTION_OVER2YEARS, MOCK_OPTION_NO_DISCOUNT } from './data.mock';

describe('Test function question 3: ', () => { 
  test('should return net price for employee: ', () => {
    const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_EMPLOYEE);
    expect(checkoutInstance.netPrice()).toBe(31)
  })

  test('should return net price for affiliate: ', () => {
    const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_AFFILIATE);
    expect(checkoutInstance.netPrice()).toBe(39)
  })

  test('should return net price for member over 2 years: ', () => {
    const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_OVER2YEARS);
    expect(checkoutInstance.netPrice()).toBe(41)
  })

  test('should return net price for normal user: ', () => {
    const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION_NO_DISCOUNT);
    expect(checkoutInstance.netPrice()).toBe(43)
  })

});

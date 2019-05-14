import { Checkout } from './main'
import { MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION } from './data.mock';

describe('Test function question 3: ', () => { 
  test('should return net price: ', () => {
    const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION);
    expect(checkoutInstance.netPrice()).toBe(31)
  })
});

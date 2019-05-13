import { Checkout } from './main'
import { MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION } from './data.mock';

test('should return false given external link', () => {
  const checkoutInstance = new Checkout(MOCK_USER, MOCK_PRODUCTS, MOCK_OPTION);
  expect(checkoutInstance.netPrice()).toBe(31)
})

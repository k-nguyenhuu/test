var DATA = require('./question');

const MockA = [{ key1: "value1", key2: "value2" }, { keyA: "valueA" }];
const MockText = "key1=value1;key2=value2\nkeyA=valueA\n";
const iData = DATA();
const storedMap = iData.store(MockA);
const storeText = iData.load(MockText);

describe('Test function question 1: ', () => {  
  test('should convert to string before save', () => {
    expect(typeof(storedMap)).toBe('string')
  })

  test('should get array: ', () => {
    expect(Array.isArray(storeText)).toBe(true)
  })
})
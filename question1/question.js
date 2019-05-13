const DATA = function() {
  function store(a) {
    cc = a.map(item => {
      dd = JSON.stringify(item);
      ee = dd
        .replace(/:/gi, "=")
        .replace(/,/gi, ";")
        .replace(/[\{\}\"]/gi, "");
      return ee;
    });
    ff = cc.join("\n");
    return ff;
  }

  function load(a) {
    cc = a.split("\n").filter(item => item.length);
    ee = cc.map(item => {
      obj = {};
      ff = item.split(";").map(it => {
        gg = it.split("=");
        obj[gg[0]] = gg[1];
      });
      return obj;
    });
    return ee;
  }

  return {
    store,
    load
  };
};

// Test
const MockA = [{ key1: "value1", key2: "value2" }, { keyA: "valueA" }];
const MockText = (text = "key1=value1;key2=value2\nkeyA=valueA\n");
const iData = DATA();
const storedMap = iData.store(MockA);
const storeText = iData.load(MockText);

console.log("##############################");
console.log("ORIGIN ARRAY:", MockA);
console.log("CORRESPONDING STRING: ", storedMap);
console.log("##############################");
console.log("ORIGIN TEXT:", MockText);
console.log("CORRESPONDING ARRAY:  ", storeText);
console.log("##############################");

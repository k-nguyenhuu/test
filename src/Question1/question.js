const DATA = function() {
  function store(a) {
    const stringArray = a.map(item => {
      return JSON.stringify(item)
        .replace(/:/gi, "=")
        .replace(/,/gi, ";")
        .replace(/[\{\}\"]/gi, "");
    });
    return stringArray.join("\n");
  }

  function load(a) {
    const stringArray = a.split("\n").filter(item => item.length);
    const mapArray = stringArray.map(item => {
      const obj = {};
      const keyValueArray = item.split(";").map(it => {
        const keyValue = it.split("=");
        obj[keyValue[0]] = keyValue[1];
      });
      return obj;
    });
    return mapArray;
  }

  return {
    store,
    load
  };
};
module.exports = DATA;
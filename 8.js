let numbs = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
]);

for (let k of numbs.keys()){
    console.log("Ключ —", k ,", значение —", numbs.get(k));
}
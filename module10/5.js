let a = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Количество элементов массива: ", a.length);

let result = a.map(function (item, index, array) {
  return console.log("a[", index, "] = ", item);
});

let a = [1, 2, 3, 4, 5, 6, 7, "asd", null, 0];

let ch = 0;
let nch = 0;
let z = 0;

for (i = 0; i < a.length; i++) {
  if (typeof a[i] == "number" && !isNaN(a[i])) {
    if (a[i] == 0) {
      z++;
      continue;
    }
    if (a[i] % 2 == 0) {
      ch++;
    } else {
      nch++;
    }
  }
}

console.log("Четных: ", ch);
console.log("Нечетных: ", nch);
if (z > 0) {
  console.log("Нулевые: ", z);
}

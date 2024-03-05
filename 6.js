//let a = [1,2,3,4,5,6,7]
let a = [1, 1, 1, 1, 1, 1];

if (a.length > 0) {
  let x = a[0];
  let result = true;
  for (i = 1; i < a.length; i++) {
    if (x != a[i]) {
      result = false;
      break;
    }
  }
  console.log(result);
} else {
  console.log(false);
}

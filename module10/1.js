let x = prompt("Enter number:");

x++;

if (typeof x == "number" && !isNaN(x)) {
  if (x % 2 == 0) {
    console.log("чётное");
  } else {
    console.log("нечётное");
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}

let x = 1;

switch (typeof x) {
  case "number":
    console.log("Число");
    break;
  case "string":
    console.log("Строка");
    break;
  case "boolean":
    console.log("Логическое");
    break;
  default:
    console.log("Тип x не определён");
}

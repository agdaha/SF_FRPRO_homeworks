function CountOddAndEvenNumbers(arr) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    let zerros = 0;

    arr.filter((num) => typeof num == "number" && !isNaN(num))
        .forEach(element => {
            if (element == 0) {
                zerros++;
            } else if (element % 2 == 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        });

    console.log("Четных: ", evenNumbers);
    console.log("Нечетных: ", oddNumbers);
    if (zerros > 0) {
        console.log("Нулевые: ", zerros);
    }
}

let a = [1, 2, 3, 4, 5, 6, 8, 7, "asd", null, 0];
let b = [6, 8, 7, "dfd", NaN, 0, 12, 12, 12, 13, 13,];

console.log("Массив a")
CountOddAndEvenNumbers(a)
console.log("Массив b")
CountOddAndEvenNumbers(b)
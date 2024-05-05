function Fist(a) {
    return function Second(b){
        return a-b
    }
}

const Sub = Fist(10)
let result = Sub(3)
console.log(result)

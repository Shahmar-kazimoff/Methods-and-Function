// 3) Map və Reducer methodlarini 
// custom olaraq yazacaqsiz.
// Hazir map reducer istifade etmeden.
// Bu funksiyalari sifirdan siz yazacaqsiz.




function Reduce(arr, callback, ilkinDeyer) {
    let container = ilkinDeyer;
    let ilkIndex;

    if (ilkinDeyer === undefined) {
        ilkIndex = 1
    } else {
        ilkIndex = 0
    }
    for (let i = ilkIndex; i < arr.length; i++) {
        container = callback(container, arr[i], i, arr);
    }

    return container;

}

const numbers = [1, 2, 3, 4, 5];
const sum = Reduce(numbers, (con, ilk) => con + ilk, 0);
console.log(sum);
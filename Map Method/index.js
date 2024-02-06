// 3) Map və Reducer methodlarini 
// custom olaraq yazacaqsiz.
// Hazir map reducer istifade etmeden.
// Bu funksiyalari sifirdan siz yazacaqsiz.


function customMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}

const numbers = [1, 2, 3, 4, 5];
const square = customMap(numbers, (num) => num ** 2);
console.log(square);
// 2) Filter methodunu custom olaraq siz 
// yazacaqsiz.Filter funksiyasi olacaq.
// Hazir funksiya olmayacaq.



function umumiFilter(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const numbers = [1, 2, 3, 4, 5, 14, 46, 18,27,41];
const cutReqem = umumiFilter(numbers, (num) => num % 2 === 0);
console.log(cutReqem);
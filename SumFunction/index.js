// 1) Bir funksiya olacaq, həmin funksiya 2 parameter 
// qəbul edəcək.Funksiyanın görəcəyi
// iş nədir-Girilən 2 parametr araligindaki 
// ədədlərin cəmini tapacaq.İlk parameter 
// 2ci parameterden kicik olmalidir.

function sumNumbers(a, b) {
    if (a < b) {
        console.log(a + b)
    } else {
        console.log("Sert odenilmir.!");
    }
}

sumNumbers(9, 7)


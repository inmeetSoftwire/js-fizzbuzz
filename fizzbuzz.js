// This is our main function
function fizzbuzz() {
    
    for (let i=0; i<=100; i++) {
        let stringBuffer = ""
        if (i % 3 == 0) {
            stringBuffer += "Fizz"
        }
        if (i % 5 == 0) {
            stringBuffer += "Buzz"
        }
        if (i % 7 == 0) {
            stringBuffer += "Bang"
        }
        if (stringBuffer == "") {
            console.log(i)
        } else {
            console.log(stringBuffer)
        }
    }
}

// Now, we run the main function:
fizzbuzz();


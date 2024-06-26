// This is our main function
function fizzbuzz() {
    
    for (let i=0; i<=255; i++) {
        let stringBuffer = ""
        // If divisible by 11, all other cases can be ignored
        if (i % 11 == 0) {
            stringBuffer = "Bong"
        } else {
            // Words are appended to the stringBuffer
            if (i % 3 == 0) {
                stringBuffer += "Fizz"
            }
            if (i % 5 == 0) {
                stringBuffer += "Buzz"
            }
            if (i % 7 == 0) {
                stringBuffer += "Bang"
            }
        }

        // 'Fezz' rule
        if (i % 13 == 0) {
            // Checking that 'B' is present before getting index to prevent error
            if (stringBuffer.includes("B")) {
                const firstBIndex = stringBuffer.indexOf("B") 
                stringBuffer = stringBuffer.slice(0, firstBIndex) + "Fezz" + stringBuffer.slice(firstBIndex)
            } else {
                stringBuffer += "Fezz"
            }
        }

        // Reverses order of words in stringBuffer if divisible by 17
        if (i % 17 == 0 && stringBuffer != "") {
            let wordArray = stringBuffer.match(/([A-Z]?[^A-Z]*)/g)
            stringBuffer = wordArray.reverse().join("")
        }
        // Output
        if (stringBuffer == "") {
            console.log(i)
        } else {
            console.log(stringBuffer)
        }
    }
}

// Now, we run the main function:
fizzbuzz();


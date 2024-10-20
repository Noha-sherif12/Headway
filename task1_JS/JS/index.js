function addLastThree() {
    
    let str = prompt("Enter a string with at least 3 characters:");

    if (str.length < 3) {
        return "The string length must be 3 or more.";
    }

    let lastThree = str.slice(-3);

    let newString = lastThree + str + lastThree;

    return newString;
}

let result = addLastThree();
console.log(result);
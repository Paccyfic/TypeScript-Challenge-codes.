//4. Write a function that reverses a string without using the built-in reverse() method.

function reverseString(inputString: string): void {
    let reversedString: string = '';

    for (let i: number = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    console.log(`Original string: ${inputString}`);
    console.log(`Reversed string: ${reversedString}`);
}


const inputString: string = "pacific NDAHIRO";
reverseString(inputString);

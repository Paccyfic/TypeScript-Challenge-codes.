//9. Write a function that takes an array and shifts each element by one position to the left, with the first element moving to the last position.


function shiftLeft(arr: any[]): void {
    if (arr.length <= 1) {
        console.log("Array has only one element or is empty. No shift needed.");
        return;
    }

    const shiftedArray: any[] = [...arr.slice(1), arr[0]];
    console.log(`Original array: [${arr}]`);
    console.log(`Array after shifting left: [${shiftedArray}]`);
}


const inputArray: number[] = [1, 2, 3, 4, 5];
shiftLeft(inputArray);

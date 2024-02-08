//8. Write a function that merges two sorted arrays into one sorted array without using built-in sort methods.


function mergeSortedArrays(arr1: any[], arr2: any[]): void {
    const mergedArray: any[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from both arrays
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(`Array 1: [${arr1}]`);
    console.log(`Array 2: [${arr2}]`);
    console.log(`Merged and sorted array: [${mergedArray}]`);
}


const array1: number[] = [1, 3, 5, 7, 9];
const array2: string[] = ["dogs", "cows", "cats", "goats", "donkeys"];
mergeSortedArrays(array1, array2);

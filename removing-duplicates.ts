//7. Write a function that removes duplicate values from an array.

function removeDuplicates(arr: any[]): void {
    const unduplicatedArray: any[] = [...new Set(arr)];
    console.log(`Original array: [${arr}]`);
    console.log(`Array with duplicates removed: [${unduplicatedArray}]`);
}


const inputArray: string[] = ["paccy", "eudoxie", "frank", "keynes", "paccy", "emma", "frank", "brian"];
removeDuplicates(inputArray);

//12. Write a function that takes an object and converts it to an array of key-value pairs.


function objectToArray(obj: Record<string, any>): void {
    const keyValueArray: [string, any][] = Object.entries(obj);
    console.log(`Original object:`, obj);
    console.log(`Array of key-value pairs:`, keyValueArray);
}


const exampleObject: Record<string, any> = { name: 'paccy', grades: 90, course: 'Computer Science', semester: 'first-semester' };
objectToArray(exampleObject);

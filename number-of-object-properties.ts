//10. Write a function that takes an object and returns the number of properties/keys. 


function countObjectProperties(obj: Record<string, any>): void {
    const propertyCount: number = Object.keys(obj).length;
    console.log(`Number of properties/keys in the object: ${propertyCount}`);
}


const exampleObject: Record<string, any> = { name: 'paccy', age: 21, city: 'kigali', sex: 'male', nationality: 'Rwandan' };
countObjectProperties(exampleObject);

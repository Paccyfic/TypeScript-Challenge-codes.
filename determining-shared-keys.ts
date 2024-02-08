//11. Write a function that takes two objects and determines if they share at least one key-value pair.


function sharedKeyValuePair(obj1: Record<string, any>, obj2: Record<string, any>): void {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            console.log("Objects share at least one key-value pair.");
            return;
        }
    }

    console.log("Objects do not share any key-value pair.");
}


const object1: Record<string, any> = { name: 'paccy', age: 21, city: 'Kigali' };
const object2: Record<string, any> = { name: 'brian', age: 21, city: 'Gisenyi' };
sharedKeyValuePair(object1, object2);

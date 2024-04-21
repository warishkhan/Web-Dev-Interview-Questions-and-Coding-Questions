// 1. Write a function to check if a given object is empty.


function isEmptyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false; // If the object has any own property, it's not empty
        }
    }
    return true; // If no own properties are found, the object is empty
}

// const obj1 = {}; // Empty object
// console.log(isEmptyObject(obj1)); // Output: true

// const obj2 = { name: "John", age: 30 }; // Non-empty object
// console.log(isEmptyObject(obj2)); // Output: false


// 2. Write a function to get the length of an object (number of keys).


function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// const obj = { name: "John", age: 30, city: "New York" };
// console.log(getObjectLength(obj)); // Output: 3


// 3. Write a function to check if a given key exists in an object.

function keyExists(obj, key) {
    return obj.hasOwnProperty(key);
}

// const obj = { name: "John", age: 30, city: "New York" };
// console.log(keyExists(obj, "age")); // Output: true
// console.log(keyExists(obj, "gender")); // Output: false


// 4. Write a function to get all keys of an object as an array.


function getAllKeys(obj) {
    return Object.keys(obj);
}

// const obj = { name: "John", age: 30, city: "New York" };
// console.log(getAllKeys(obj)); // Output: ["name", "age", "city"]


// 5. Write a function to get all values of an object as an array.


function getAllValues(obj) {
    return Object.values(obj);
}

// const obj = { name: "John", age: 30, city: "New York" };
// console.log(getAllValues(obj)); // Output: ["John", 30, "New York"]



// 6. Write a function to merge two objects into one.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// const obj1 = { name: "John", age: 30 };
// const obj2 = { city: "New York", country: "USA" };
// console.log(mergeObjects(obj1, obj2)); // Output: { name: "John", age: 30, city: "New York", country: "USA" }



// 7.Write a function to deep clone an object.

function deepClone(obj) {
    // Check if obj is an object
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Return the input if it's not an object
    }

    // Initialize a new object/array to store the cloned values
    const clone = Array.isArray(obj) ? [] : {};

    // Iterate over each key in the input object
    for (let key in obj) {
        // Recursively clone each nested object/array
        clone[key] = deepClone(obj[key]);
    }

    return clone; // Return the cloned object
}

// Example usage:
// const obj = { name: "John", age: 30, address: { city: "New York", country: "USA" } };
// const clonedObj = deepClone(obj);
// console.log(clonedObj); // Output: { name: "John", age: 30, address: { city: "New York", country: "USA" } }


// 8. Write a function to check if two objects are equal (have the same keys and values).

function objectsAreEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys in obj1 exist in obj2 and have the same values
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true; // Objects are equal
}

// Example usage:
// const obj1 = { name: "John", age: 30 };
// const obj2 = { name: "John", age: 30 };
// console.log(objectsAreEqual(obj1, obj2)); // Output: true


// 9. Write a function to convert an object to an array of key-value pairs.

function objectToArray(obj) {
    return Object.entries(obj);
}

// Example usage:
// const obj = { name: "John", age: 30, city: "New York" };
// console.log(objectToArray(obj)); 
// Output: [["name", "John"], ["age", 30], ["city", "New York"]]


// 10. Write a function to convert an array of key-value pairs to an object.

function arrayToObject(arr) {
    return Object.fromEntries(arr);
}

// Example usage:
// const arr = [["name", "John"], ["age", 30], ["city", "New York"]];
// console.log(arrayToObject(arr)); 
// Output: { name: "John", age: 30, city: "New York" }
































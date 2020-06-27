/* 
    Write functions which check if key is in object
*/

const isKeyIncluded = (obj, key) => Object.keys(obj).includes(key);

console.log(isKeyIncluded({ user: "Steve", name: "Jobs" }, "name")); //true
console.log(isKeyIncluded({ user: "Steve", name: "Jobs" }, "Jobs")); //false
console.log(isKeyIncluded({})); //false
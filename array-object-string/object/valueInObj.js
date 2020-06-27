/* 
    Write functions which check if value is in object
*/

const isValueIncluded = (obj, value) => Object.values(obj).includes(value);

console.log(isValueIncluded({ user: "Steve", name: "Jobs" }, "name")); //false
console.log(isValueIncluded({ user: "Steve", name: "Jobs" }, "Jobs")); //true
console.log(isValueIncluded({})); //false
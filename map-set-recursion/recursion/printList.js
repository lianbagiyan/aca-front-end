/**
 * Recursion - get list values
 * @param {object}  tree- object
 * @param {array} res - array, where we add values
 * @returns {array} - array with object values
*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
};
  
const printList = (tree, res = []) => {
    if (tree === null) {
      return res;
    }
  
    return printList(tree.next, [tree.value, ...res]);
};
  
console.log(printList(list));
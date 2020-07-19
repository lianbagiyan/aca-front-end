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
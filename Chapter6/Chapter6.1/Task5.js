let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

printReverseList(list);

function printReverseListRecursive(list) {

  if (list.next) {
    printReverseListRecursive(list.next);
  }

  console.log(list.value);
}

printReverseListRecursive(list);
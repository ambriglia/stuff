const array1 = [
  ["Some Store Name", 2, 3.49],
  ["Some Other Store Name", 4, 2.99]
];

const array2 = [
  [3.49, "Some Different Name", 6],
  [1.49, "yet another Name", 12],
  [4.77, "unique name mart", 5]
]

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const mergedArray = mergeArrays(array1, array2);

console.log('****merged arrays****', mergedArray);

function isInt(n) {
  return n % 1 === 0;
}

const objects = [];
for (var i = 0; i < mergedArray.length; i++) {
  const obj = {};
  for (var j = 0; j < mergedArray[i].length; j++) {
    if (typeof mergedArray[i][j] === 'string') {
      obj.storeName = mergedArray[i][j];
    } else if (isInt(mergedArray[i][j])) {
      obj.distance = mergedArray[i][j];
    } else {
      obj.price = mergedArray[i][j];
    }
  }
  objects.push(obj);
}

console.log('***merged objects***', objects);

console.log('***within 10 miles***', objects.filter(e => e.distance <= 10));

console.log(
  '***top 3 within 10 miles***',
  objects.filter(e => e.distance <= 10)
    .sort((a, b) => {
      if (a.distance < b.distance) {
        return -1;
      } else if (a.distance > b.distance) {
        return 1;
      } else {
        return 0;
      }
    }).slice(0, 3)
);

function zipList(list1, list2) {
  const combined = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      combined.push(list1[i]);
      combined.push(list2[i]);
    }
  } else {
    console.log('Lists are not equal!');
  }
  return combined;
}

function zipListTheSimpleWay(list1, list2) {
  let combined = [];
  if (list1.length === list2.length) {
    combined = _.flatten(_.zip(list1, list2));
  } else {
    console.log('Lists are not equal!');
  }
  return combined;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(`ZipList: ${zipList(list1, list2)}`);
console.log(`ZipList but simple: ${zipListTheSimpleWay(list1, list2)}`);

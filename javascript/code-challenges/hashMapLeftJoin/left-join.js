'use strict';

const hash = require('../hashMap/hashMap');

const synonyms = new hash.HashTable(1024);
const antonyms = new hash.HashTable(1024);

synonyms.add('fond', 'enamored');
synonyms.add('wrath', 'anger');
synonyms.add('diligent', 'employed');
synonyms.add('outfit', 'garb');
synonyms.add('guide', 'usher');

antonyms.add('fond', 'adverse');
antonyms.add('wrath', 'delight');
antonyms.add('diligent', 'idle');
antonyms.add('guide', 'follow');
antonyms.add('flow', 'jam');

const join = (leftTable, rightTable, direction) => {
  let tableOne;
  let tableTwo;

  if (direction.toLowerCase() === 'left') {
    tableOne = leftTable;
    tableTwo = rightTable;
  } else if (direction.toLowerCase() === 'right') {
    tableOne = rightTable;
    tableTwo = leftTable;
  } else { throw 'error, invalid join direction'; }

  const results = [];
  for (let i = 0; i < tableOne.buckets.length; i++) {
    const row = [];
    if (tableOne.buckets[i]) {
      const key = (Object.keys(tableOne.buckets[i].head.value)[0]);
      const value = (tableOne.buckets[i].head.value[key]);
      row[row.length] = key;
      row[row.length] = value;
      if (tableTwo.contains(key)) {
        row[row.length] = tableTwo.get(key);
      }
      else { row[row.length] = null; }
      results[results.length] = row;
    }
  }
  return results;
};


// console.log(leftJoin(synonyms, antonyms, 'right'));

module.exports = join;


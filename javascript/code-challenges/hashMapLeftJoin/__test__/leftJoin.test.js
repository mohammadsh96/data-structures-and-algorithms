'use strict';

const hash = require('../../hashMap/hashMap');
const join = require('../left-join.js');

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


describe('Testing leftJoin function', () => {
  it('Should return all keys and values from left hashtable', () => {
    const test = join(synonyms, antonyms, 'left');

    expect(test.length).toBeTruthy();
    expect(test).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'fond', 'enamored', 'adverse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'wrath', 'anger', 'delight' ]
    ]);
  });

  it('Should return all values from right hashtable that exist in current left join. Should return null where they do not', () => {
    const test = join(synonyms, antonyms, 'left');

    expect(test.length).toBeTruthy();
    expect(test).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'fond', 'enamored', 'adverse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'wrath', 'anger', 'delight' ]
    ]);
  });

  it('Should return all keys and values from right hashtable', () => {
    const test = join(synonyms, antonyms, 'right');

    expect(test.length).toBeTruthy();
    expect(test).toEqual([
      [ 'diligent', 'idle', 'employed' ],
      [ 'flow', 'jam', null ],
      [ 'fond', 'adverse', 'enamored' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'wrath', 'delight', 'anger' ]
    ]);
  });

  it('Should return all values from left hashtable that exist in current right join. Should return null where they do not', () => {
    const test = join(synonyms, antonyms, 'right');

    expect(test.length).toBeTruthy();
    expect(test).toEqual([
      [ 'diligent', 'idle', 'employed' ],
      [ 'flow', 'jam', null ],
      [ 'fond', 'adverse', 'enamored' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'wrath', 'delight', 'anger' ]
    ]);
  });
});

# Hashtables

- A hashtable traditionally is created from an array. I always like the size 1024. this is important for index placement. After you have created your array of the appropriate size, do some sort of logic to turn that “key” into a numeric number value. Here is a simplistic hashing algorithm:
Add or multiply all the ASCII values together. Multiply it by a prime number such as 599. Use modulo to get the remainder of the result, when divided by the total size of the array.

## Challenge

Implement a Hashtable Class with the following methods:

`set`
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.


`get`
Arguments: key
Returns: Value associated with that key in the table

`contains`
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

`keys`
Returns: Collection of keys

`hash`
Arguments: key
Returns: Index in the collection for that key

## Approach & Efficiency
the power of Hash tables is that we are dealing with Array and we already now the index of the value that we want to search on it .
so we can directly access any index 
*the time complexity : Big O(1)*
*the Space complexity : Big O(50)* because we are creating and Array with size =50 

## API
the code is very clear and meaningful  , you can check it from : [here](./hashTable.js)
## test 
`npm test hashTable` 

test file " [here](./__test__/hashTable.test.js)
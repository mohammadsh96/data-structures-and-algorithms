'use strict';

const sortArray =require("../sortArray")



describe("sort array test " , ()=>{

  test("works", ()=>{

    let arr=[50,40,80,2,6]
  sortArray(arr)

  expect(arr[0]).toEqual(2);
  expect(arr[1]).toEqual(6);
  expect(arr[2]).toEqual(40);
  expect(arr[3]).toEqual(50);
  expect(arr[4]).toEqual(80);


})


})

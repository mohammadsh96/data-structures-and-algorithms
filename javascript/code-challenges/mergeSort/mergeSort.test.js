"use strict";

const { mergeSort } = require("../mergeSort/mergeSort.js");

describe("test mergeSort", () => {
  it("Test mergeSort with array length > 2", () => {
    let arr = [8, 4, 20, 45, 1, 29];
    let result = mergeSort(arr);
    expect(result).toEqual([1, 4, 8, 20, 29, 45]);
    expect(arr.length).toEqual(6);

  });

  it("Test mergeSort with array length =  1 ", () => {
    let arr = [0];

    let result = mergeSort(arr);
    expect(result).toEqual([0]);
  });
});

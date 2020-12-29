// Write your own test cases.
const { _forEach, _map, _filter, _reduce } = require("./arrayUtils.js");

Array.prototype._forEach = _forEach;
Array.prototype._map = _map;
Array.prototype._reduce = _reduce;
Array.prototype._filter = _filter;

let reduceSum = (s,v) => s + v;

describe('reduce', () => {
    expect(() => []._reduce()).toThrow(TypeError);
    expect(() => []._reduce(reduceSum)).toThrow(TypeError);
	expect([]._reduce(reduceSum, 5)).toBe(5);
    expect([1,2,3]._reduce(reduceSum, 1)).toBe(7);
    expect([1,2,3]._reduce(reduceSum)).toBe(6);

})

let mapNum = (a) => a * 2; 
describe('map', () => {
    expect(() => []._map()).toThrow(TypeError);
	expect([]._map(mapNum)).toEqual([]);
    expect([1,2,3]._map(mapNum)).toEqual([2,4,6]);
})

let filterNum = (a) => a % 2 === 0;

describe('filter', () => {
    expect(() => []._filter()).toThrow(TypeError);
	expect([]._filter(filterNum)).toEqual([]);
    expect([1,2,3]._filter(filterNum)).toEqual([2]);
})

let sum = 0, foreachNum = (a) => {
    sum += a;
}
describe('forEach', () => {
    it("for empty array", () => {
        expect(() => []._forEach()).toThrow(TypeError);
    });
    []._forEach(foreachNum);
    expect(sum).toBe(0);
    [1,2,3]._forEach(foreachNum);
    expect(sum).toBe(6);
})
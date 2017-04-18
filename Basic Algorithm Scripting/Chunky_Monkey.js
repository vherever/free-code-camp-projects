/**
 * Created by vherever on 3/19/17.
 *
 * Chunky Monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns
 * them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var _arr = [];
    for(var i = 0, len = arr.length; i < len; i += size) {
        _arr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return _arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/**
 chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
 */
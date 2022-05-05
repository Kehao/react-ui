/*
  0 1 2 3 4 5
 ┏━━━┯━━━┯━━━┓
0┃0 0┊1 3┊6 6┃
1┃0 0┊2 3┊6 6┃
 ┠┈┈┈┼┈┈┈┼┈┈┈┨
2┃4 4┊4 3┊7 8┃
3┃4 4┊4 5┊9 9┃
 ┗━━━┷━━━┷━━━┛

Sections to Cells map:
 0.0 [0]
 1.0 [1, 2, 3]
 2.0 [6]
 0.1 [4]
 1.1 [3, 4, 5]
 2.1 [7, 8, 9]
*/
export var CELLS = [{
  x: 0,
  y: 0,
  width: 2,
  height: 2
}, {
  x: 2,
  y: 0,
  width: 1,
  height: 1
}, {
  x: 2,
  y: 1,
  width: 1,
  height: 1
}, {
  x: 3,
  y: 0,
  width: 1,
  height: 3
}, {
  x: 0,
  y: 2,
  width: 3,
  height: 2
}, {
  x: 3,
  y: 3,
  width: 1,
  height: 1
}, {
  x: 4,
  y: 0,
  width: 2,
  height: 2
}, {
  x: 4,
  y: 2,
  width: 1,
  height: 1
}, {
  x: 5,
  y: 2,
  width: 1,
  height: 1
}, {
  x: 4,
  y: 3,
  width: 2,
  height: 1
}];
export var SECTION_SIZE = 2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CELLS, "CELLS", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/TestData.js");

  __REACT_HOT_LOADER__.register(SECTION_SIZE, "SECTION_SIZE", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/Collection/TestData.js");
}();

;
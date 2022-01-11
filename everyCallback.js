// Classic way to create a function
function isEven(element) {
  return element % 2 === 0;
}

// Variable way of creating a function  
var isEven2 = function (element) {
  return element % 2 === 0;
};

// Creating function with Arrow Keyword
var isEven3 = (element) => {
  return element % 2 === 0;
};

// console.log(isEven3(4));

var result = [2, 4, 6, 8].every((e) => {
  return e % 2 === 0;                               // () => {} then return is required
});
console.log(result);

// () => () then return is not required
var result2 = [2, 4, 6, 8].every((e) => (e % 2 === 0));    
console.log(result2);
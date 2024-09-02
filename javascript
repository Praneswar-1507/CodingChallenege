1./**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentValue = n;

   
    return function() {
        // Return the current value and increment it for the next call
        return currentValue++;
    };
    
};
const counter = createCounter(10);
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

const counterNegative = createCounter(-2);
console.log(counterNegative());
console.log(counterNegative()); 
console.log(counterNegative());
console.log(counterNegative()); 
console.log(counterNegative()); 
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
2./**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}


let t = Date.now();
sleep(100).then((result) => {
    console.log(Date.now() - t); 
    console.log(result);
});
3./**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
 const nums1 = [null, {}, 3];
console.log(nums1.last()); 

const nums2 = [];
console.log(nums2.last());

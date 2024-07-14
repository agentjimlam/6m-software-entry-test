/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        return -1;
    }
    
    // Swap values
    x = x + y;
    y = x - y;
    x = x - y;
    
    console.log("Swapped values: x =", x, ", y =", y);
    return [x, y];
}

// Task 2: Add code here


let result1 = swap("Apple", 10);
console.log(result1);  // Output: -1

let result2 = swap(9, 17);
console.log(result2);  // Output: Swapped values: x = 17 , y = 9
                        //         [17, 9]

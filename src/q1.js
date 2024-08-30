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
    // Task 1: Add code here
    if (typeof x == 'number' && typeof y == 'number'){          // if x is a number AND y is a number
        x = x + y;  // x = 9 + 17 = 26
        y = x - y;  // y = 26 - 17 = 9;
        x = x - y;  // x = 26 - 9 = 17;

        console.log('Swapped values, x = ' + x + ' y = ' + y);
        return [x, y];        
    }
    else{
        return -1;                                              // x and y are not numeric, return -1 
    }
}

// Task 2: Add code here

const scenarioA = swap('Apple', 10); // calls swap function with ('Apple', 10) as argument, stores returned value in  constant variable scenarioA
console.log(scenarioA);


const scenarioB = swap(9, 17); // calls swap function with (9, 17) as argument, stores returned value in constant variable scenarioB
console.log(scenarioB);

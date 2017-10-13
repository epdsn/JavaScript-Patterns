// JavaScript Document
// Author: Eric Perez
// Excercise #2: Find the second highest number in an array

/*
Task:
The function must find and return the second largest number.
*/

// Solution #1
var a =[10,20,30,50,60,70,80,90,100,110];

function max(a){
    var big = a[0];
    var secondLargest =null;
    for(var i=0;i<a.length;i++){
        if(a[i]>big){
            secondLargest = big;
            big=a[i];
        }else if(a[i]>secondLargest){

            secondLargest =a[i]
        }
    }
    return secondLargest;
}
// Test 1
console.log(max(a));

// Solution #2
function getSecondLargest(nums) {
    // Complete the function
    let largest = null;
    let secondLargest = null;
    for (let i = 0; i < nums.length ; i++ ) {
        if ( nums[i] >= largest ) {
            if ( nums[i] !== largest ) {
                secondLargest = largest;
            }
            largest = nums[i];
        } else if ( nums[i] >= secondLargest ) {
            secondLargest = nums[i];
        }
    }
    console.log(secondLargest);
}

// Test 2
getSecondLargest([2, 3, 6, 6, 5]);

// Test 3
getSecondLargest([10,8,2,3,6,6,5]);

// Test 4
getSecondLargest([2,3,8,6,5]);

// Test 5
getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]);
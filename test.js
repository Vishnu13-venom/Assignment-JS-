// Question: 1
// You are given  two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.
// Input:
// The first line will contain T, number of testcases.
// Each testcase contains a single line of input, two integers L,R.


function Converttime(n) {

    // In this we apply simple logic 
    // in this we simply take modulo and then divide the number of seconds in 1 hours
    // similarly in total number of minutes in 1 hour
    //and at last we just add all the numbers.

    n = n % (24 * 3600);
    var hour = parseInt(n / 3600);

    n %= 3600;
    var minutes = n / 60;

    n %= 60;
    var seconds = n;

    console.log(hour + " " + "hours "+ minutes.toFixed() + " " + "minutes " + seconds.toFixed() + " " + "seconds ");
}

    var n = 129;
    Converttime(n);



//     // Question 2:
// // For each testcase, in the new line print "Odd" if the XOR in the range is odd, else print "Even".
// // Sample Input:
// //   4
// //   1 4
// //   2 6
// //   3 3
// //   2 3

//Logic XOR work like if the one number is low and other is high then the XOR of those number is 1
// A  XOR B = 
// 0 XOR 0 = 0
// 1 XOR 0 = 1
// 0 XOR 1 = 1
// 1 XOR 1 = 0
    function oddeven(L, R)
{      // Here we count the no. of odd number in the given integers range
    let count = Math.floor((R - L) / 2);
 
    if (R % 2 == 1 || L % 2 == 1)
        count++;
 
 // now check the number is even or odd.
    if (count % 2 == 0)
        return "Even";
    else
        return "Odd";
}
console.log(oddeven(L, R));


// Question:3 
// You are given with T number of strings. You need to sort the strings according to their first character.
// Input :
// 4
// “AXXX”
// “UVVVV”
// “PGGGG”
// “BOOUU”
//logic: we simply using sort function, its predefined function in javascript and also it check the elements alphabetically
// timp complexity O(nlogn) 
const strings = ['AXXX', 'UVVVV', 'PGGGG', 'BOOUU'];
sorting = strings.sort();
sorting.forEach((value, index) => {
    console.log(sorting.slice(index,index+1));
  });

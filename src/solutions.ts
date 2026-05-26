
// function filterEvenNumbers(numbersArray: number[]) {
//     const evenNumbersArray: number[] = [];
//     for (const num of numbersArray) {

//         if (num % 2 === 0) {
//             evenNumbersArray.push(num)
//         }
//     }
//     return evenNumbersArray;

// }
// const result = filterEvenNumbers([11, 12, 13, 14, 15, 61, 72, 18])
// console.log(result)


function reverseString (input:string){
    let reverseLetter:string = "";

    for(let i=input.length-1;i>=0;i--){
       reverseLetter = reverseLetter + input[i]
    }
    return reverseLetter;
}
 const result = reverseString("abcdefg")
 console.log(result)
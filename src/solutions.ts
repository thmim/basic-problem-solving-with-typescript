
function filterEvenNumbers(numbersArray: number[]) {
    const evenNumbersArray: number[] = [];
    for (const num of numbersArray) {

        if (num % 2 === 0) {
            evenNumbersArray.push(num)
        }
    }
    return evenNumbersArray;

}



function reverseString (input:string){
    let reverseLetter:string = "";

    for(let i=input.length-1;i>=0;i--){
       reverseLetter = reverseLetter + input[i]
    }
    return reverseLetter;
}


 function checkType (input: string | number){
    if(typeof input === "number" ){
        return "Number"
    }
    else{
        return "String"
    }

 }




function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}





interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book) {
    return {
        ...book,
        isRead: true
    };
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}



function getIntersection(array1: number[], array2: number[]): number[] {
    const matchedNumber: number[] = [];
    for (const number of array1) {
        const findNumber = number;

        if (array2.includes(findNumber)) {
            matchedNumber.push(findNumber)
        }
    }
    return matchedNumber;
}




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// fruits.splice(3,1);
// console.log(fruits);

// let num =fruits.indexOf("Orange");
// console.log(num);


// const arr=[2,44,55,5,34,12,60];
// let arr2=arr.map(val=> val*3);
// console.log(arr);
// console.log(arr2);

// let red=arr.reduce(myfunction);

// function myfunction(total,value,index, array){
//     return value+total;
// }

// console.log(red);

// for (let i = 0; i< arr.length; i++){

//     console.log(arr[i]);
// }
// const cars = ["BMW", "Volvo", "Mini"];

// for (let x of cars) {
//   console.log(x)
// }


// console.log(arr.forEach(name=> name));

// console.log(arr.map(name=> name));


// max number 
// palindrome
// min number
// unique number
// duplicate number 
// unduplicate

// Maximum Value
let a = [1,2,52,13,22,76];
// let max=a[0];
// for (let i =0; i<a.length; i++){
//     if (max<a[i]){
//         max=a[i];
//     }
// }
// console.log(max);

// // MInimum Value
// let min=a[0];
// for (let i =0; i<a.length; i++){
//     if (min>a[i]){
//         min=a[i];
//     }
// }
// console.log(min);

// let unique=[];
// let counter=0
// let check=0;
// for (let i =0; i<a.length; i++){
//     for(let j =0; j<a.length ;j++){
//         if (a[i]===a[j] && i!==j){
//             check=0;
//             break;
//         }
//         else{
//             check=1;
//         }
        
//     }
//     if(check===1){
//         unique[counter]=a[i];
//         counter++;
//     }


// }
// console.log(unique);

// let duplicate=[];
// let counter=0
// let check=0;
// for (let i =0; i<a.length; i++){
//     for(let j =0; j<a.length ;j++){
//         if (a[i]===a[j] && i!==j){
//             duplicate[counter]=a[i];
//             counter++;
//             break;
//         }
//         else{
//             check=1;
//         }
        
//     }
//     


// }
// if(check===1){
        
    //         console.log("No duplicate here")
    //     }
// console.log(duplicate);

// let remove=[];

// let check=0;
// for (let i =0; i<a.length; i++){
//     for(let j =0; j<a.length ;j++){
//         if (a[i]===a[j] && i!==j){
//             remove=i;
//             a.splice(remove,1);
            
//             break;
//         }
//         else{
//             check=1;
//         }
        
//     }

// }
// if(check===1){
        
//     console.log("No duplicate here")
// }
// else{

//     console.log(a);
// }

word="noman";
let j=-1;
len=word.length-1;

for (let i = 0 ; i<word.length;i++){
    
    if ((i===len) && (word[i]===word[len])){

        console.log("It is palindrome");
        break;
    }
    else if(word[i]===word[len]){
        len--;
    }
    else{
        console.log("It is not palindrome");
        break;
    }
}

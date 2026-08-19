function multiplication(a,b){
    return a*b
}

let num1=prompt("enter first number");
let num2=prompt("enter second number");
num1=Number(num1);
num2=Number(num2);
let result=multiplication(num1,num2);
document.write("the result is"+result+"<br>");
console.log(result);
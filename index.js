    var operator=prompt("what operation do you want to carry out\n e.g + -  /  *  % ")
    var num1 =parseInt(prompt("enter the first number"))
    var num2 =parseInt(prompt("enter the second number\n"+ num1 +" "+ operator))

    if (operator === "*") {
        alert("The answer is " + num1*num2 )
    }
    else if (operator === "/"){
        alert("The answer is " + num1/num2 )
    }
    else if (operator === "+"){
        var sum = num1+num2
        alert("The answer is " + sum )
    }
    else if (operator === "-"){
        var difference = num1-num2
        alert("The answer is " + difference )
    }
    else if (operator === "%"){
        alert("The answer is " + num1%num2 )
    }
    else{
        alert("This is not a valid operation")
    }

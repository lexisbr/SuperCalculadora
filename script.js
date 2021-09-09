let concatenateAns = function(value){
    document.calculator.ans.value += value;
}

let calculate = function(){
    let operation = document.calculator.ans.value;
    let result = eval(operation)
    document.calculator.ans.value = result; 
    document.getElementById("history").innerHTML += "<h1> "+operation+"="+result+" </h1>";
}
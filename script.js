let concatenateAns = function(value){
    document.calculator.ans.value += value;
}

let calculate = function(){
    document.calculator.ans.value = eval(document.calculator.ans.value)
}
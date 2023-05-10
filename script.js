
let resultInput = document.getElementById("result");
function appendValue(value) {
    resultInput.value += value;
}
function appendOperator(operator) {
    if (operator === 'Sin'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.sin(angle);
    }
    else if(operator === 'Cos'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.cos(angle);
    }
    else if(operator==='Tan'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.tan(angle);
    }
    else {
        resultInput.value += operator;
    }
}
function clearResult() {
    resultInput.value = "";
}
function calculate(operator,value) {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "Error";
    }
}

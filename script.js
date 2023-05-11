
let resultInput = document.getElementById("result");
let operatorUsed = false;
function rad()
{
    let radians = parseFloat(resultInput.value);
    resultInput.value = radians * Math.PI / 180;
}
function deg()
{
    let degrees = parseFloat(resultInput.value);
    resultInput.value = degrees * (180 / Math.PI);
}
function percent()
{
    resultInput.value = parseFloat(resultInput.value)/100;
}
function answer()
{
    resultInput.value = "Answer = " + resultInput.value;
}
function expo()
{
    resultInput.value+='E';
}
function factorial()
{
    try {
        let number = parseInt(resultInput.value);
        let longNumber = 1;
        for (let i = 1; i <= number; i++)
        {
            longNumber*=i;
        }
        resultInput.value = longNumber;
    }
    catch (error)
    {
        resultInput.value = "Math Error"
    }
}
function operation(operator) {
    operatorUsed = true;
    resultInput.value += operator;
}
function pi()
{
    if(!operatorUsed)
    {
        resultInput.value+="*";
    }
    resultInput.value+=Math.PI;
}
function euler()
{
    if(!operatorUsed)
    {
        resultInput.value+="*";
    }
    resultInput.value+=Math.E;
}
function Inverse()
{
    resultInput.value = 1/parseFloat(resultInput.value);
}
function Log(log)
{
    if(log==='ln')
    {
        if(resultInput.value.trim()==='')
        {
            resultInput.value = "Please enter a number";
        }
        else {
            let number = parseFloat(resultInput.value);
            resultInput.value = Math.log(number);
        }
    }
    else
    {
        if(resultInput.value.trim()==='')
        {
            resultInput.value = "Please enter a number";
        }
        else {
            let number = parseFloat(resultInput.value);
            resultInput.value = Math.log10(number);
        }
    }
}
function power(pow)
{
    if(pow==='sqrt')
    {
        let number = parseFloat(resultInput.value);
        resultInput.value = Math.sqrt(number);
    }
    else
    {
        resultInput.value+='**';
    }
}
function number(value) {
    operatorUsed = false;
    resultInput.value += value;
}

function Trig(operator)
{
    if (operator === 'sin'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.sin(angle);
    }
    else if(operator === 'cos'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.cos(angle);
    }
    else if(operator==='tan'){
        let angle = parseFloat(resultInput.value);
        resultInput.value = Math.tan(angle);
    }
}
function cls() {
    operatorUsed = false;
    resultInput.value = "";
}
function equal() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "Error";
    }
}

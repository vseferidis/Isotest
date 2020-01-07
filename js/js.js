let active = document.querySelector('.calc-active');
let history = document.querySelector('.calc-history');
let keyPress = document.querySelector('.calc-keys').addEventListener('click', buttonClick);
let key;
let action;

let n1 = '';
let n2 = '';
let operator;
let result = '';
active.innerHTML = "0";

function buttonClick(e) {
    key = parseFloat(e.target.innerHTML);

    n1 = parseFloat(n1 + "" + key);
    console.log(n1);
    action = e.target.dataset.value;
    active.innerHTML = n1;
    if (action == "div") {
        operator = " / ";
        result = result + n1;
        history.innerHTML = result + operator;
        active.innerHTML = "0";
        result += operator;
        n1 = '';
        return result;
    } else if (action == "times") {
        result = result + n1 + " * ";
        history.innerHTML = result;
        active.innerHTML = "0";
        operator = "*";
        n1 = '';
        return result;
    } else if (action == "clear") {
        n1 = '';
        n2 = '';
        operator = null;
        active.innerHTML = 0;
    } else if (action == "equals") {

        console.log(eval(result));
        return result;
    }


    return n1, n2, operator
}
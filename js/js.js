let active = document.querySelector('.calc-active');
let history = document.querySelector('.calc-history');
let keyPress = document.querySelector('.calc-keys').addEventListener('click', buttonClick);
let key;
let action;

let n1 = '';
let n2 = '';
let operator = '';
let result = '';
active.innerHTML = "0";

function buttonClick(e) {
    key = parseFloat(e.target.innerHTML);
    n1 = parseFloat(n1 + "" + key);
    console.log(n1); // we got the numbers we pressed
    active.innerHTML = n1;

    action = e.target.dataset.value; // operator selection

    if (action == "equals") {
        if (operator == "div") {
            if (n1 == 0 || n1 == NaN || n1 == undefined) {
                active.innerHTML = "You can't do that!" //cannot devide by 0
            } else {
                result = eval(result / n1);
                console.log(result);
                active.innerHTML = result;
                operator = null;
                n1 = '';
            }
        } else if (operator == "plus") {
            if (n1 == 0 || n1 == NaN || n1 == undefined) {
                active.innerHTML = "You can't do that!" //cannot devide by 0
            } else {
                result = eval(result + n1);
                console.log(result);
                active.innerHTML = result;
                operator = null;
                n1 = '';
            }
        }
    } else if (action == "div") {
        calc(action)
    } else if (action == "plus") {
        calc(action);
    } else if (action == "minus") {
        calc(action);
    } else if (action == "times") {
        calc(action);
    }
    return n1, result, operator
}

function calc(ops) {
    switch (ops) {
        case ops == "plus":
            ops = "+";
            break;
        case ops == "minus":
            ops = "-";
            break;
        case ops == "times":
            ops = "*";
            break;
        case ops == "div":
            ops = "/";
            break;
        default:
            break;
    }
    active.innerHTML = 0;
    if (result == '') {
        result = n1; // if never divided
    } else if (operator == null) {
        n1 = result // if we previously clicked equals
    } else {
        result = parseFloat(result + ops + n1); //normal division
    }
    operator = action;
    n1 = '';
    return n1, result, operator
}
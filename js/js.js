let display = document.querySelector('.calc-display');
let keyPress = document.querySelector('.calc-keys').addEventListener('click', buttonClick);
let key;
let action;

let n1 = '';
let n2 = '';
let operator;
let result = 0;

function buttonClick(e) {
    key = parseFloat(e.target.innerHTML);

    n1 = parseFloat(n1+""+key);
    console.log(n1);
    action = e.target.dataset.value;
    display.innerHTML = n1;
    if (action == "div") {
        operator = "/";
        if (n2 == '') {
            n2 = n1;
            n1 = '';
        } else {
            calculate(n1, n2, operator);
            n2 = result;
            n1 = '';
            console.log(result);
        }
    } else if ( action == "times") {
        operator == action;
        if (n2 =='') {
            n2 = n1;
            n1 = '';
        } else {
            n2 = n2 * n1;
        }
        result = n2;
        display.innerHTML = result;
    } else if ( action == "clear") {
        n1 = '';
        n2 = '';
        operator = null;
        display.innerHTML = 0;
    } else if ( action == "equals") {
        
    }
    console.log(operator);
   function calculate(n1, n2, operator) {
        result = parseFloat(n1+operator+n2);
        display.innerHTML = result;
        return result;
    }
    return n1, n2, operator
}
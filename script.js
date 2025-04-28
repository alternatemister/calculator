function add(a, b)
{
    return Number(a) + Number(b);
}

function subtract(a, b)
{
    return Number(a) - Number(b);
}

function multiply(a, b)
{
    return Number(a) * Number(b);
}

function divide(a, b)
{
    return Math.round((Number(a) / Number(b))*1000)/1000;
}

let num1 = null;
let operator = null;
let num2 = null;

function operate(num1, operator, num2)
{
    if (operator === "+")
    {
        return add(num1, num2);
    }
    else if (operator === "-")
    {
        return subtract(num1, num2);
    }
    else if (operator === "X")
    {
        return multiply(num1, num2);
    }
    else if (operator === "/")
    {
        return divide(num1, num2);
    }
}

let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
btn.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.className === "AC")
        {
            num1 = null;
            operator = null;
            num2 = null;
            display.innerText = "";
        }

        else if (num1 === null && operator === null && num2 === null)
        {
            if (button.className === "number")
            {
                display.innerText += button.innerText;
            }

            else if (button.className === "operator")
            {   
                operator = button.innerText;
                num1 = display.innerText;
                display.innerText = button.innerText; //display now shows the operator
            }
        }

        else if (num1 !== null && operator !== null && num2 === null) //num1 and operator are set but NOT num2
        {
            if (button.className === "number" && (display.innerText === "+" || display.innerText === "-" || display.innerText === "X"||
                 display.innerText === "/")) //and number is entered right after the operator
            {
                display.innerText = button.innerText;
            }

            else if (button.className === "number") //number is pressed and a number is currently displayed
            {
                display.innerText += button.innerText;
            }

            else if ((button.className === "equal" || button.className === "operator") && ((display.innerText !== "+" && 
                display.innerText !== "-" && display.innerText !== "X" && display.innerText !== "/" &&
                display.innerText !== "=" && display.innerText !== "AC"))) // equal or operator is pressed when numbers are on the display
            {
                num2 = display.innerText;
                display.innerText = operate(num1, operator, num2);
                num1 = display.innerText;
                num2 = null;

                if (button.className === "operator") //if operator was pressed, prompting calculation, not the equal
                {
                    operator = button.innerText;
                }
                else //if equal was pressed, the operator is null
                {
                    operator = null;
                }
                
            }

            else if (button.className = "operator" && ((display.innerText === "+" || 
                display.innerText === "-" || display.innerText === "X"|| display.innerText === "/")))
            {
                operator = button.innerText;
                display.innerText = button.innerText;
            }
        }

        else if (num1 !== null && operator === null && num2 === null)
        {
            if (button.className === "number")
            {
                num1 = null;
                display.innerText = button.innerText
            }

            else if (button.className === "operator")
            {
                operator = button.innerText;
                display.innerText = button.innerText;
            }
        }
    });
});

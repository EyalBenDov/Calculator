let previous = "";
let current = "";
let current_operator = ""
let first_current = ""
let last_operation = "eq"
let last_current = ""
let on = true;
screen = document.querySelector("#screen");

function calculate(num1, operator, num2) {
    if (operator == "/") return +num1 / +num2
    if (operator == "+") return +num1 + +num2
    if (operator == "-") return +num1 - +num2
    if (operator == "*") return +num1 * +num2
}

function updateDisplay(newText) {
    screen.textContent = newText;
}

buttons = document.querySelectorAll("button")

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id == "+" || buttons[i].id == "-" || buttons[i].id == "*" || buttons[i].id == "/") {
        buttons[i].addEventListener("click", () => {
                previous = current
                current = ""
                updateDisplay("")
                current_operator = buttons[i].id
                console.log("previous: " + previous)
                console.log("current operator: " + current_operator)
                console.log("current: " + current)
                last_operation = "add"
        })
    }
    else if (buttons[i].id == "=") {
        buttons[i].addEventListener("click", () => {
            if (current == "0" && current_operator == "/") {
                updateDisplay("no")
            } else if (current_operator != ""){
                last_current = previous
                if (last_operation == "add") {
                    last_current = current
                } else {
                    let temp = previous
                    previous = current
                    current = temp
                }
                let result = calculate(previous, current_operator, current)
                current = result
                previous = last_current
                updateDisplay(current)
                last_operation = "eq";
            }
            console.log("previous: " + previous)
            console.log("current operator: " + current_operator)
            console.log("current: " + current)
        })
    } else if (buttons[i].id == "del") {
        buttons[i].addEventListener("click", () => {
            current = current.slice(0, current.length-1)
            updateDisplay(current)
        })
    } else if (buttons[i].id == "pm") {
        buttons[i].addEventListener("click", () => {
            current *= -1
            updateDisplay(current)
        })
    } else if (buttons[i].id == "clear") {
        buttons[i].addEventListener("click", () =>{
            current = ""
            previous = ""
            current_operator = ""
            on = true
            updateDisplay("")
        })
    } else if (buttons[i].id == "off") {
        buttons[i].addEventListener("click", ()=>{
            on = false
            updateDisplay("")
        })
    }
    else {
        buttons[i].addEventListener("click", () => {
            if (on) {
                updateDisplay(current + buttons[i].id)
                current += buttons[i].id
                console.log("previous: " + previous)
                console.log("current operator: " + current_operator)
                console.log("current: " + current)
            }
        })
    }  
}


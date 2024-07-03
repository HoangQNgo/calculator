// Get the display element from the HTML
let display = document.getElementById('display');
// Variables to keep track of the current input, the operator, and the first operand
let currentInput = '';
let operator = null;
let firstOperand = null;

// Function to append numbers and dots to the display
function appendToDisplay(value) {
    // Prevent multiple dots in the number
    if (value === '.' && currentInput.includes('.')) return;
    // Add the value to the current input and update the display
    currentInput += value;
    display.value = currentInput;
}

// Function to set the operator (+, -, *, /)
function setOperator(op) {
    // If there's no current input, do nothing
    if (currentInput === '') return;
    // If there's already a first operand, calculate the result first
    if (firstOperand !== null) {
        calculate();
    }
    // Set the first operand and the operator, then clear the current input
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

// Function to calculate the result
function calculate() {
    // If any part is missing, do nothing
    if (firstOperand === null || operator === null || currentInput === '') return;
    // Convert the current input to a number
    let secondOperand = parseFloat(currentInput);
    let result;
    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    // Update the display with the result and reset variables
    display.value = result;
    currentInput = result;
    firstOperand = null;
    operator = null;
}

// Function to clear the display and reset variables
function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
}

// codes improved by llm
// // Grab that display element
// let display = document.getElementById('display');
// let currentInput = '';
// let operator = null;
// let firstOperand = null;

// // Function to add numbers and dots to our display
// function appendToDisplay(value) {
//     // No double dots allowed in this club!
//     if (value === '.' && currentInput.includes('.')) return;
//     currentInput += value;
//     display.value = currentInput;
// }

// // Set up our operator (+, -, *, /)
// function setOperator(op) {
//     if (currentInput === '') return;
//     if (firstOperand !== null) {
//         calculate();
//     }
//     firstOperand = parseFloat(currentInput);
//     operator = op;
//     currentInput = '';
// }

// // Time to do some math!
// function calculate() {
//     if (firstOperand === null || operator === null || currentInput === '') return;
//     let secondOperand = parseFloat(currentInput);
//     let result;
    
//     try {
//         switch (operator) {
//             case '+':
//                 result = firstOperand + secondOperand;
//                 break;
//             case '-':
//                 result = firstOperand - secondOperand;
//                 break;
//             case '*':
//                 result = firstOperand * secondOperand;
//                 break;
//             case '/':
//                 // No dividing by zero on my watch!
//                 if (secondOperand === 0) throw new Error("Can't divide by zero, silly!");
//                 result = firstOperand / secondOperand;
//                 break;
//             default:
//                 return;
//         }
        
//         // Let's keep things tidy with 8 decimal places
//         result = Math.round(result * 1e8) / 1e8;
        
//         // Check if our result is too big for its britches
//         if (Math.abs(result) > 1e15) {
//             display.value = result.toExponential(2);
//         } else {
//             display.value = result;
//         }
        
//         currentInput = result.toString();
//         firstOperand = null;
//         operator = null;
//     } catch (error) {
//         display.value = "Error: " + error.message;
//         currentInput = '';
//         firstOperand = null;
//         operator = null;
//     }
// }

// // Clear everything and start fresh
// function clearAll() {
//     currentInput = '';
//     operator = null;
//     firstOperand = null;
//     display.value = '';
// }

// // Just clear the current entry
// function clearEntry() {
//     currentInput = '';
//     display.value = '';
// }

// // Let's add some keyboard support for the cool kids
// document.addEventListener('keydown', function(event) {
//     const key = event.key;
//     if (/[0-9.]/.test(key)) {
//         appendToDisplay(key);
//     } else if (['+', '-', '*', '/'].includes(key)) {
//         setOperator(key);
//     } else if (key === 'Enter' || key === '=') {
//         calculate();
//     } else if (key === 'Escape') {
//         clearAll();
//     } else if (key === 'Backspace') {
//         clearEntry();
//     }
// });
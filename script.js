// script.js

// Function to append numbers/operators to the result input
function appendToResult(value) {
    document.getElementById("result").value += value;
}

// Function to clear the result input
function clearResult() {
    document.getElementById("result").value = '';
}

// Function to calculate the result
function calculateResult() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (e) {
        document.getElementById("result").value = 'Error';
    }
}

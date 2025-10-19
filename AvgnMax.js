// Name: Koushik Rama
// G#: G01508456

document.addEventListener("DOMContentLoaded", function() {
const dataField = document.getElementById("dataField");
const avgField = document.getElementById("average");
const maxField = document.getElementById("maximum");

dataField.addEventListener("blur", function() {
    const dataStr = dataField.value.trim();
    if(!dataStr) return;

    // Split by comma
    const numbers = dataStr.split(",").map(num => Number(num.trim()));

    // Validate: must be 10 numbers, all between 1 and 100
    if(numbers.length !== 10 || numbers.some(n => isNaN(n) || n < 1 || n > 100)) {
    alert("Please enter exactly 10 numbers between 1 and 100, separated by commas.");
    return;
    }

    // Compute sum and maximum using for loop
    let sum = 0;
    let maximum = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if(numbers[i] > maximum) {
        maximum = numbers[i];
    }
    }

    // Compute average
    const average = sum / numbers.length;

    // Populate fields
    avgField.value = average.toFixed(2);
    maxField.value = maximum;
});
});

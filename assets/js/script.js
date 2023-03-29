// Function to perform the calculation based on the operator
function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Main program loop
  while (true) {
    // Take user input for the first number
    var num1 = parseFloat(prompt("Enter the first number:"));
  
    // Take user input for the operator
    var operator = prompt("Enter an operator (+, -, *, /):");
  
    // Take user input for the second number
    var num2 = parseFloat(prompt("Enter the second number:"));
  
    // Perform the calculation and display the result
    var result = calculate(num1, operator, num2);
    alert(num1 + " " + operator + " " + num2 + " = " + result);
  
    // Ask if the user wants to perform another calculation
    var another_calculation = prompt("Do you want to perform another calculation? (y/n):");
    if (another_calculation.toLowerCase() === "n") {
      break;
    }
  }
  
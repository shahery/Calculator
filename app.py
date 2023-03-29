while True:
    # Take user input for the first number
    num1 = float(input("Enter the first number: "))

    # Take user input for the operator
    operator = input("Enter an operator (+, -, *, /): ")

    # Take user input for the second number
    num2 = float(input("Enter the second number: "))

    # Perform the calculation based on the operator
    if operator == "+":
        result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        result = num1 / num2
    else:
        print("Invalid operator")
        continue

    # Print the result
    print(f"{num1} {operator} {num2} = {result}")

    # Ask if the user wants to perform another calculation
    another_calculation = input("Do you want to perform another calculation? (y/n): ")
    if another_calculation.lower() == "n":
        break

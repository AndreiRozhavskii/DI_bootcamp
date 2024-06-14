def safe_division(num1, num2):
    try:
        return num1 / num2
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")
        return None
    
safe_division(5, 0)
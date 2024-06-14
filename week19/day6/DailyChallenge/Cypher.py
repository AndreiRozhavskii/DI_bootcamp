def caesar_cipher():
    operation = input("Do you want to encrypt or decrypt? ")
    message = input("Enter your message: ")
    shift = int(input("Enter the shift value: "))
    result = ""

    for char in message:
        if char.isalpha():
            ascii_offset = ord('a') if char.islower() else ord('A')
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
        else:
            result += char

    print(f"The {operation}ed message is: {result}")

caesar_cipher()
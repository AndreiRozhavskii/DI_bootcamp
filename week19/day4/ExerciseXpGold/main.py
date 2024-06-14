# Exercise 1
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)

# Exercise 2
for i in range(1500, 2501):
    if i % 5 == 0 and i % 7 == 0:
        print(i)

# Exercise 3
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter your name: ")
if user_name in names:
    print(names.index(user_name))

# Exercise 4
numbers = [int(input("Input the 1st number: ")), int(input("Input the 2nd number: ")), int(input("Input the 3rd number: "))]
print("The greatest number is: ", max(numbers))

# Exercise 5
import string
for letter in string.ascii_lowercase:
    if letter in 'aeiou':
        print(f"{letter} is a vowel")
    else:
        print(f"{letter} is a consonant")

# Exercise 6
words = [input("Enter a word: ") for _ in range(7)]
letter = input("Enter a letter: ")
for word in words:
    if letter in word:
        print(word.index(letter))
    else:
        print(f"The letter {letter} does not exist in the word {word}")

# Exercise 7
numbers = list(range(1, 1000001))
print(min(numbers), max(numbers), sum(numbers))

# Exercise 8
numbers = input("Enter numbers separated by comma: ").split(',')
print(numbers, tuple(numbers))

# Exercise 9
import random
user_number = int(input("Enter a number from 1 to 9: "))
random_number = random.randint(1, 9)
if user_number == random_number:
    print("Winner")
else:
    print("Better luck next time")
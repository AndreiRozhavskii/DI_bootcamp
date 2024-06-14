# Exercise 1
def display_message():
    print("I am learning Python programming in this course.")
display_message()

# Exercise 2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")
favorite_book("Alice in Wonderland")

# Exercise 3
def describe_city(city, country="USA"):
    print(f"{city} is in {country}.")
describe_city("New York")

# Exercise 4
import random
def compare_numbers(input_number):
    random_number = random.randint(1, 100)
    if input_number == random_number:
        print("Success! Both numbers are the same.")
    else:
        print(f"Fail! Your number is {input_number} and the random number is {random_number}.")
compare_numbers(50)

# Exercise 5
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")
make_shirt()
make_shirt(size="medium")
make_shirt(size="small", text="Hello, World!")

# Exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magicians):
    for magician in magicians:
        print(magician)
def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += " the Great"
make_great(magician_names)
show_magicians(magician_names)
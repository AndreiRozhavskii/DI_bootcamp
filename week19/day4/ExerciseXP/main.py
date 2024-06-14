# #Exercise 1

# my_fav_numbers = [3, 7, 13, 21]
# my_fav_numbers.append(2)
# my_fav_numbers.append(5)
# my_fav_numbers.pop(-1)

# friend_fav_numbers= [1, 2, 5, 11, 21, 7]
# our_fav_numbers = []

# for x in my_fav_numbers:
#     if x in friend_fav_numbers:
#         our_fav_numbers.append(x)

# print(our_fav_numbers)

#Exercise 2

# ex2_tuple = (2, 3, 4, 5)
# ex2_tuple.append(5) #this will give an error
# print(ex2_tuple) #it did

#Exercise 3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# apple_count = 0
# for apple in basket:
#     if apple == "Apples":
#         apple_count+=1

# print(basket)
# print(f"apple count is {apple_count} " )
# basket.clear()
# print(basket)   

#Exercise 4

#Floats are floating point numbers

# list_of_floats = []
# x = 1
# while True:
    
#     x+=0.5
#     if x == int(x):
#        list_of_floats.append(int(x))
#     else:
#         list_of_floats.append(x)
#     if x == 5:
#          break

# print(list_of_floats)


#Exercise 5

# for x in range(1, 21):
#     print(x)

# for x in range(1, 21):
#     if x%2 == 0:
#         print(x)

#Exercise 6
# import os


# while True:
#     os.system('cls')
#     my_name = "Tural"
#     user_name = input("Please enter your name if our names match this loop will stop: ")

#     if my_name == user_name:
#         break

#Exercise 7


# user_fruits = input("Please enter your favorite fruits and seperate each with a single space: ").split()
# 
# user_fruit = input("Please enter a fruit of your choice: ")
# if user_fruit in user_fruits:
#     print(f"You selected {user_fruit} and it is in your favorite fruit list")
    
# else:
#     print(f"You selected {user_fruit} and it is not in your favorite fruit list")
    

#Exercise 8 

# list_of_toppings = []
# topping_count = 0
# while True:
#     user_choice = input("Please enter a topping of your choice: ").lower()

#     if user_choice == "quit":
#         
#         print(f"You selected following toppings {list_of_toppings} and your total price is: {10+ topping_count*2.5}" )
#     else:
#         print(f"You have added {user_choice} to the list of toppings")
#         list_of_toppings.append(user_choice)
#         topping_count+=1

#Exercise 9:
# family_ages = input("Enter the ages of the family members, separated by a space: ").split()
# family_ages = [int(age) for age in family_ages]

# total_cost = 0
# for age in family_ages:
#     if age < 3:
#         total_cost += 0
#     elif 3 <= age <= 12:
#         total_cost += 10
#     else:
#         total_cost += 15

# print(f"The total cost of the family's tickets is: ${total_cost}")

# teenagers = input("Enter the names of the teenagers, separated by a space: ").split()
# teenager_ages = {}
# for teenager in teenagers:
#     age = int(input(f"Enter the age of {teenager}: "))
#     teenager_ages[teenager] = age

# permitted_teenagers = [name for name, age in teenager_ages.items() if 16 <= age <= 21]

# print("The final list of teenagers who can watch the movie is: ", permitted_teenagers)

#Exercise 10:

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    print(f"I made your {current_sandwich.lower()}")
    finished_sandwiches.append(current_sandwich)

    
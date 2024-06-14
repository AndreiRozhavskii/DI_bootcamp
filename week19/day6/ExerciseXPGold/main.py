
# Exercise 1: Birthday Look-up
birthdays = {
    "Alice": "2000/01/01",
    "Bob": "2001/02/02",
    "Charlie": "2002/03/03",
    "Dave": "2003/04/04",
    "Eve": "2004/05/05"
}
print("Welcome! You can look up the birthdays of the people in the list!")
name = input("Please enter a person's name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print("This name is not in the list.")

# Exercise 2: Birthdays Advanced
print("The names in the list are: ", ', '.join(birthdays.keys()))
name = input("Please enter a person's name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")

# Exercise 3: Add Your Own Birthday
new_name = input("Please enter a person's name: ")
new_birthday = input("Please enter this person's birthday (in the format “YYYY/MM/DD”): ")
birthdays[new_name] = new_birthday
name = input("Please enter a person's name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}")

# Exercise 4: Fruit Shop
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
for item, price in items.items():
    print(f"The price of {item} is {price}")

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total_cost = sum(item_info["price"] * item_info["stock"] for item_info in items.values())
print(f"The total cost to buy everything in stock is {total_cost}")

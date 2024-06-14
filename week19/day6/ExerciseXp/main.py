
# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = {}
for i in range(len(keys)):
    dictionary[keys[i]] = values[i]
print(dictionary)

# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0
for member in family:
    if family[member] < 3:
        total_cost += 0
    elif 3 <= family[member] <= 12:
        total_cost += 10
    else:
        total_cost += 15
print(total_cost)

# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
brand["country_creation"] = "Spain"
brand = {"international_competitors": ["Gap", "H&M", "Benetton"]}
brand["international_competitors"].append("Desigual")
del brand["creation_date"]
brand.update({"creation_date": 1975, "number_stores": 10000})

# Exercise 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A)

disney_users_B = {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)

users.sort()
disney_users_C = {}
for i in range(len(users)):
    disney_users_C[users[i]] = i
print(disney_users_C)

disney_users_A_i = {}
for i in range(len(users)):
    if 'i' in users[i]:
        disney_users_A_i[users[i]] = i
print(disney_users_A_i)

disney_users_A_mp = {}
for i in range(len(users)):
    if users[i][0].lower() in ['m', 'p']:
        disney_users_A_mp[users[i]] = i
print(disney_users_A_mp)

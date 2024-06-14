# # Exercise 1

# # def get_random_temp():
# #     import random
# #     return (random.randint(-10, 40))

# # # get_random_temp()
# # # get_random_temp()
# # # get_random_temp()
# # # get_random_temp()

# # def weather():
# #     x = get_random_temp()
# #     print(f"The temperature right now is {x} degrees Celsius.")
# #     if x < 0:
# #         print("Brrr, that's freezing! Wear some extra layers today")
# #     elif 0<x<16:
# #         print("Quite chilly! Don’t forget your coat")
# #     elif 16<x <23:
# #         print("It's fine weather")
# #     elif 24< x <32:
# #         print("It's getting hotter")
# #     elif 32< x <40:
# #         print("Are you in Africa?")
    

# # weather()

# #Exercise 2:

# def star_wars_quiz(data):
#     correct = 0
#     incorrect = 0
#     wrong_answers = []

#     for item in data:
#         user_answer = input(item["question"] + " ")
#         if user_answer.lower() == item["answer"].lower():
#             correct += 1
#         else:
#             incorrect += 1
#             wrong_answers.append((item["question"], user_answer, item["answer"]))

#     return correct, incorrect, wrong_answers

# def quiz_results(correct, incorrect, wrong_answers):
#     print(f"You got {correct} correct and {incorrect} incorrect.")
#     if incorrect > 3:
#         print("You should play again!")
#     for item in wrong_answers:
#         print(f"For the question '{item[0]}', you answered '{item[1]}' but the correct answer was '{item[2]}'.")

# # Exercise 3
# def get_age(year, month, day):
#     current_year = 2022
#     current_month = 12
#     age = current_year - year - ((current_month < month) or ((current_month == month) and (current_day < day)))
#     return age

# def can_retire(gender, dob):
#     year, month, day = map(int, dob.split("/"))
#     age = get_age(year, month, day)
#     return (gender == "m" and age >= 67) or (gender == "f" and age >= 62)

# # Exercise 4
# def calculate_sum(x):
#     return sum(int(str(x) * i) for i in range(1, 5))
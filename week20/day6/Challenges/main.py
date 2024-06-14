#Exercise 1

# def insert_item (given_list, index, item):
#     given_list.insert(index, item)

# random_list = [0, 1, 2, 3]

# insert_item(random_list, 0, 5)

# print(random_list)

#Exercise2

# def count_space(string):
#     count = 0
#     for char in string:
#         if char == " ":
#             count+=1

#     return count

# print(count_space("one two three "))


#Exercise3

def upper_lower(text):
    import string
    uppercase_num = sum(1 for char in text if char in string.ascii_uppercase)

    lowercase_num = sum(1 for char in text if char in string.ascii_lowercase)

    return {"uppercase_count":uppercase_num, "lowercase_count":lowercase_num}
    

print(upper_lower("IN THIS text"))


# Exercise 4
def my_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total

# Exercise 5
def find_max(lst):
    max_num = lst[0]
    for num in lst:
        if num > max_num:
            max_num = num
    return max_num

# Exercise 6
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Exercise 7
def list_count(lst, element):
    count = 0
    for e in lst:
        if e == element:
            count += 1
    return count

# Exercise 8
def norm(lst):
    return (sum(i**2 for i in lst))**0.5

# Exercise 9
def is_mono(lst):
    return all(lst[i] <= lst[i + 1] for i in range(len(lst) - 1)) or all(lst[i] >= lst[i + 1] for i in range(len(lst) - 1))

# Exercise 10
def longest_word(lst):
    return max(lst, key=len)

# Exercise 11
def separate_types(lst):
    int_list = [i for i in lst if type(i) == int]
    str_list = [i for i in lst if type(i) == str]
    return int_list, str_list

# Exercise 12
def is_palindrome(s):
    return s == s[::-1]

# Exercise 13
def sum_over_k(sentence, k):
    return sum(1 for word in sentence.split() if len(word) > k)

# Exercise 14
def dict_avg(d):
    return sum(d.values()) / len(d)

# Exercise 15
def common_div(a, b):
    divisors = [i for i in range(1, min(a, b)+1) if a % i == b % i == 0]
    return divisors

# Exercise 16
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Exercise 17
def weird_print(lst):
    return [lst[i] for i in range(len(lst)) if i % 2 == lst[i] % 2 == 0]

# Exercise 18
def type_count(**kwargs):
    types = {}
    for value in kwargs.values():
        types[type(value).__name__] = types.get(type(value).__name__, 0) + 1
    return types

# Exercise 19
def my_split(s, delimiter=' '):
    return s.split(delimiter)

# Exercise 20
def password_format(s):
    return '*' * len(s)
import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

couple_list = []
frequency = {}

for x in list_of_numbers:
    complement = target_number - x
    if complement in frequency:
        for _ in range(frequency[complement]):
            couple_list.append([x, complement])
    frequency[x] = frequency.get(x, 0) + 1

print(f" Total number of couples that makes {target_number} in the list of numbers are {len(couple_list)}")
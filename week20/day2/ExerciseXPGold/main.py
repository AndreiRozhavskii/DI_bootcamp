import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        count += 1
        if throw_dice() == throw_dice():
            return count

results = []
for _ in range(100):
    results.append(throw_until_doubles())
total_throws = sum(results)
average_throws = round(total_throws / 100, 2)
print(f"Total throws: {total_throws}")
print(f"Average throws to reach doubles: {average_throws}")
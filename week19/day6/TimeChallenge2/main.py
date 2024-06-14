x = int(input('Enter the Number:'))


divisors_sum = 0
for i in range(1, x):
    if x % i == 0:
        divisors_sum += i


print(divisors_sum == x)
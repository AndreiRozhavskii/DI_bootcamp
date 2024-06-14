# Exercise 1

for i in range(1, 4):
    print(' ' * (3 - i) + '*' * (2 * i - 1))


for i in range(1, 6):
    print(' ' * (5 - i) + '*' * i)


for i in range(1, 6):
    print('*' * i)
for i in range(5, 0, -1):
    print(' ' * (5 - i) + '*' * i)

#Exercise 2


my_list = [2, 24, 12, 354, 233]


for i in range(len(my_list) - 1):
    
    minimum = i

    
    for j in range(i + 1, len(my_list)):
        
        if(my_list[j] < my_list[minimum]):
            minimum = j

            
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]


print(my_list)
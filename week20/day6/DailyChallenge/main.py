
#Exercise 1


# user_input = input("Please enter a sequence of words separated by comma: ")
# input_list = user_input.split(',')
# input_list.sort()
# output  = ",".join(input_list)
# print(output)


#Exercise2

user_input = input("Please enter sentence: ")
input_list = user_input.split(" ")
longest_len = 0
longest_word = ''
for word in input_list:
    if (len(word) > longest_len):
        longest_len = len(word)
        longest_word = word
print(longest_word)

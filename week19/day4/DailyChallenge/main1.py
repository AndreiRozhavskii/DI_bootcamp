# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))

multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)


# Challenge 2
word = input("Enter a word: ")

new_word = word[0]
for i in range(1, len(word)):
    if word[i] != word[i - 1]:
        new_word += word[i]

print(new_word)
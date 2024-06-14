matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

message = ''
for column in range(len(matrix[0])):
    for row in matrix:
        if row[column].isalpha():
            message += row[column]
        else:
            message += ' '

print(' '.join(message.split()))
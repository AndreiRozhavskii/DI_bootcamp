import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

print("Welcome to Hangman!")
print("Guess the word!")
print("You have 10 attempts to guess the word correctly.")
print("Let's play!")

HANGMANPICS = [
    '''
  +---+
      |
      |
      |
      |
      |
=========''','''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========''','''
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========''','''
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========''']

guesses = ''
turns = 10

while turns > 0:
    failed = 0
    for char in word:
        if char in guesses:
            print(char, end = '')
        else:
            print("_", end = '')
            failed += 1
    if failed == 0:
        print("\nCongratulations! You won!")
        break
    guess = input("\nGuess a character: ")
    guesses += guess
    if guess not in word:
        turns -= 1
        print("________________________________________________________")
        print("Wrong!")
        if turns>0:
            print("You have", + turns, 'more guesses')
        print(HANGMANPICS[10 - turns])
        if turns == 0:
            print("You lose!")
            print("The word was:", word)
            
            break
# 1. A class is a blueprint for creating objects. It defines a set of attributes that will characterize any object that is instantiated from the class.

# 2. An instance is an individual object of a certain class. An instance of a class is created by calling the class.

# 3. Encapsulation is the practice of keeping fields within a class private, then providing access to them via public methods.

# 4. Abstraction is a process of hiding the implementation details and showing only functionality to the user.

# 5. Inheritance is when a class uses code constructed within another class. If we think of inheritance in terms of biology, we can think of a child inheriting certain traits from their parent.

# 6. Multiple inheritance is when a class can inherit from multiple classes.

# 7. Polymorphism allows us to define methods in the child class with the same name as defined in their parent class.

# 8. MRO is a rule used by Python to determine the method and attribute lookup. It's a way of specifying the class search path used by Python to search for the right method to use in classes having multi-inheritance.



#PART 2

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in ["Hearts", "Diamonds", "Clubs", "Spades"]
                      for value in ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop()
    

    # Create a new deck of cards
deck = Deck()

# Print the number of cards in the deck
print(f"Deck contains {len(deck.cards)} cards")

# Shuffle the deck
deck.shuffle()

# Deal a card
dealt_card = deck.deal()

# Print the dealt card
print(f"Dealt card: {dealt_card.value} of {dealt_card.suit}")

# Print the number of cards left in the deck
print(f"Deck now contains {len(deck.cards)} cards")
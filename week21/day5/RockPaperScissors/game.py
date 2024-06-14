import random

class Game():
    def __init__(self):
        self.moves = ["rock", "paper", "scissors"]
        self.score = 0

    def new_game(self):
        user_move = input("Select (r)ock, (p)aper, (s)cissors: ").lower()
        if user_move == "r":
            return "rock"
        elif user_move == "p":
            return "paper"
        elif user_move == "s":
            return "scissors"

    def menu_user_input(self):
        print("Menu\n(g) Play a new game\n(x) Show Scores and exit")
        user_input = input(": ").lower()
        return user_input

    def update_score(self, result):
        if result == "win":
            self.score += 1
        return self.score

    def select_random_move(self):
        self.move = random.choice(self.moves)
        return self.move

    def compare_moves(self, user_move, random_move):
        if user_move == random_move:
            return "draw"
        elif (user_move == "rock" and random_move == "scissors") or \
             (user_move == "scissors" and random_move == "paper") or \
             (user_move == "paper" and random_move == "rock"):
            return "win"
        else:
            return "lose"
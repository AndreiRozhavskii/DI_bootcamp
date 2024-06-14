from game import Game

def play_game():
    game = Game()
    while True:
        user_input = game.menu_user_input()
        if user_input == "g":
            computer_move = game.select_random_move()
            user_move = game.new_game()
            result = game.compare_moves(user_move=user_move, random_move=computer_move)
            print(f"You chose: {user_move.capitalize()}. Computer chose: {computer_move.capitalize()}. Result: {result.capitalize()}")
            score = game.update_score(result = result)
            print(f"Score: {score}")
        elif user_input == "x":
            print(f"Final Score: {game.score}")
            break
        else:
            print("Invalid input. Please try again.")

play_game()
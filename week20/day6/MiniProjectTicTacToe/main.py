import os
import random

def check_winner(board, player):
    if board[1] == board[2] == board[3] == player:
        return True
    if board[4] == board[5] == board[6] == player:
        return True
    if board[7] == board[8] == board[9] == player:
        return True
    if board[1] == board[4] == board[7] == player:
        return True
    if board[2] == board[5] == board[8] == player:
        return True
    if board[3] == board[6] == board[9] == player:
        return True
    if board[1] == board[5] == board[9] == player:
        return True
    if board[3] == board[5] == board[7] == player:
        return True
    return False

def is_board_full(board):
    return ' ' not in board

def display_board(board):
    os.system('cls' if os.name == 'nt' else 'clear')  # Clear the terminal
    print(board[1] + ' | ' + board[2] + ' | ' + board[3])
    print('--+---+--')
    print(board[4] + ' | ' + board[5] + ' | ' + board[6])
    print('--+---+--')
    print(board[7] + ' | ' + board[8] + ' | ' + board[9])

def player_input():
    row = input("Enter a row (0-2): ")
    col = input("Enter a column (0-2): ")
    return (row, col)

def find_winning_move(board, player):
    for i in range(1, 10):
        if board[i] == ' ':
            board[i] = player
            if check_winner(board, player):
                board[i] = ' '  
                return i
            board[i] = ' ' 
    return None

def computer_input(board):
    
    i = find_winning_move(board, 'O')
    if i is not None:
        return str((i - 1) // 3), str((i - 1) % 3)

    
    i = find_winning_move(board, 'X')
    if i is not None:
        return str((i - 1) // 3), str((i - 1) % 3)

    
    while True:
        row = random.randint(0, 2)
        col = random.randint(0, 2)
        if board[row * 3 + col + 1] == ' ':
            return str(row), str(col)

def play_game():
    board = ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    player = 'X'
    while True:
        display_board(board)
        if player == 'X':
            row, col = player_input()
        else:
            row, col = computer_input(board)
        board[int(row) * 3 + int(col) + 1] = player
        if check_winner(board, player):
            print(player + ' wins!')
            break
        elif is_board_full(board):
            print('The game is a draw!')
            break
        player = 'O' if player == 'X' else 'X'

play_game()
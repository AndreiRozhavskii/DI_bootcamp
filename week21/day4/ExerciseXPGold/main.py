# Part I
class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
        self.authenticated = False
        self.username = None
        self.password = None

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
        else:
            raise Exception("Amount must be positive")

    def withdraw(self, amount):
        if amount > 0:
            self.balance -= amount
        else:
            raise Exception("Amount must be positive")

# Part II
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if self.balance - amount >= self.minimum_balance:
            super().withdraw(amount)
        else:
            raise Exception("Cannot withdraw beyond the minimum account balance")

# Part III
class BankAccount:
    def __init__(self, balance=0, username=None, password=None):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Username or password is incorrect")

    def deposit(self, amount):
        if self.authenticated:
            super().deposit(amount)
        else:
            raise Exception("User not authenticated")

    def withdraw(self, amount):
        if self.authenticated:
            super().withdraw(amount)
        else:
            raise Exception("User not authenticated")

# Part IV
class ATM:
    def __init__(self, account_list, try_limit=2):
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("1. Log in")
            print("2. Exit")
            option = input("Select an option: ")
            if option == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif option == "2":
                break

    def log_in(self, username, password):
        for account in self.account_list:
            if account.authenticate(username, password):
                self.show_account_menu(account)
                break
        else:
            self.current_tries += 1
            if self.current_tries >= self.try_limit:
                print("Reached maximum tries")
                exit()

    def show_account_menu(self, account):
        while True:
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            option = input("Select an option: ")
            if option == "1":
                amount = int(input("Enter amount to deposit: "))
                account.deposit(amount)
            elif option == "2":
                amount = int(input("Enter amount to withdraw: "))
                account.withdraw(amount)
            elif option == "3":
                break
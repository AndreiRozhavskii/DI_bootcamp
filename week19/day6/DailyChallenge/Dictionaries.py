# Challenge 1
word = input("Enter a word: ")
letter_indexes = {letter: [i for i, char in enumerate(word) if char == letter] for letter in word}
print(letter_indexes)

# Challenge 2
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}
wallet = "$300"
wallet = int(wallet.replace("$", ""))

items_purchase = {item: int(price.replace("$", "").replace(",", "")) for item, price in items_purchase.items()}
affordable_items = sorted(item for item, price in items_purchase.items() if price <= wallet)

print(affordable_items if affordable_items else "Nothing")
# Exercise
class Farm:
    def __init__(self, farmer_name):
        self.farmer_name = farmer_name
        self.animals = {}

    def add_animal(self, animal, quantity=1):
        if animal in self.animals:
            self.animals[animal] += quantity
        else:
            self.animals[animal] = quantity

    def get_info(self):
        info = f"{self.farmer_name}'s farm\n\n"
        for animal, quantity in self.animals.items():
            info += f"{animal} : {quantity}\n"
        info += "\nE-I-E-I-0!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_types = [animal + 's' if self.animals[animal] > 1 else animal for animal in animal_types]
        return f"{self.farmer_name}'s farm has {' '.join(animal_types)}."
    

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
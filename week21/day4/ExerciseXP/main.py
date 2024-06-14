# Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [Bengal("Bengal", 3), Chartreux("Chartreux", 2), Siamese("Siamese", 1)]
sara_pets = Pets(all_cats)

for cat in sara_pets.animals:
    print(cat.walk())

# Exercise 2 : Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f'{self.name} won the fight'
        else:
            return f'{other_dog.name} won the fight'

dog1 = Dog("Dog1", 2, 30)
dog2 = Dog("Dog2", 3, 40)
dog3 = Dog("Dog3", 4, 50)

print(dog1.fight(dog2))
print(dog2.fight(dog3))

# Exercise 3 : Dogs Domesticated
from random import choice

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        print(f'{", ".join([dog.name for dog in args])} all play together')

    def do_a_trick(self):
        if self.trained:
            print(f'{self.name} {choice(["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"])}')

# Exercise 4 : Family
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations on the new family member!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f'Family {self.last_name}:')
        for member in self.members:
            print(member)

# Exercise 5 : TheIncredibles Family
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(member['power'])
                else:
                    raise Exception("Member is not over 18 years old")

    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()
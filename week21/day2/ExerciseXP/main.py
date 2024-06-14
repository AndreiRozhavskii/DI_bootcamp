
#Exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

list_of_classes = []
list_of_names = ['kitty', 'tom', 'beth']
list_of_ages = [1, 2, 3]
for x in range(3):
    new_cat = Cat(cat_name = list_of_names[x-1], cat_age= list_of_ages[x-1] )
    list_of_classes.append(new_cat)


def age_checker(x):
    biggest_age = 0
    for y in x:
        if y.age > biggest_age:
            biggest_age = y.age
    
    for z in x:
        if z.age == biggest_age:
            print(f"The oldest cat is {z.name} and it is {biggest_age} old")
        

age_checker(list_of_classes)



# Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(davids_dog.name)
else:
    print(sarahs_dog.name)

# Exercise 3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4
class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        return {i+1: [animal for animal in self.animals if animal[0].lower() == chr(97 + i)] for i in range(26)}

    def get_groups(self):
        groups = self.sort_animals()
        for group in groups.values():
            print(group)

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Giraffe")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()

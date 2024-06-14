class Human:
    def __init__(self, id_number, name, age, priority, blood_type):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type
        self.family = []

    def add_family_member(self, person):
        self.family.append(person)
        person.family.append(self)


class Queue:
    def __init__(self):
        self.humans = []

    def add_person(self, person):
        if person.age > 60 or person.priority:
            self.humans = [person] + self.humans
        else:
            self.humans.append(person)

    def find_in_queue(self, person):
        for i, human in enumerate(self.humans):
            if human == person:
                return i
        return None

    def swap(self, person1, person2):
        index1, index2 = self.find_in_queue(person1), self.find_in_queue(person2)
        self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

    def get_next(self):
        if not self.humans:
            return None
        return self.humans.pop(0)

    def get_next_blood_type(self, blood_type):
        for i, human in enumerate(self.humans):
            if human.blood_type == blood_type:
                return self.humans.pop(i)
        return None

    def sort_by_age(self):
        self.humans = sorted(self.humans, key=lambda x: (-x.priority, -x.age))

    def rearrange_queue(self):
        i = 0
        while i < len(self.humans) - 1:
            if self.humans[i+1] in self.humans[i].family:
                self.humans.append(self.humans.pop(i+1))
            else:
                i += 1


# Create some Human instances
john = Human("1", "John", 30, False, "A")
mary = Human("2", "Mary", 65, True, "B")
peter = Human("3", "Peter", 70, False, "O")
susan = Human("4", "Susan", 40, True, "AB")

# Add family members
john.add_family_member(mary)
peter.add_family_member(susan)

# Create a Queue instance
queue = Queue()

# Add the Human instances to the queue
queue.add_person(john)
queue.add_person(mary)
queue.add_person(peter)
queue.add_person(susan)


# Print the names of the people in the queue
print("Initial order of the queue:")
for human in queue.humans:
    print(human.name)

# Sort the queue by age and priority
queue.sort_by_age()

# Print the names of the people in the queue after sorting
print("\nOrder of the queue after sorting by age and priority:")
for human in queue.humans:
    print(human.name)

# Rearrange the queue so that no two members of the same family are next to each other
queue.rearrange_queue()

# Print the names of the people in the queue after rearranging
print("\nOrder of the queue after rearranging to avoid consecutive family members:")
for human in queue.humans:
    print(human.name)
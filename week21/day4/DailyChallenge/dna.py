import random

class Gene:
    def __init__(self):
        self.value = random.randint(0, 1)

    def mutate(self):
        self.value = 1 - self.value  

class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:  
                gene.mutate()

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:  
            self.dna.mutate()


organisms = [Organism(DNA(), 0.5) for _ in range(100)]
generations = 0

while True:
    generations += 1
    for organism in organisms:
        organism.mutate()
        if all(gene.value == 1 for chromosome in organism.dna.chromosomes for gene in chromosome.genes):
            print(f"It took {generations} generations to get a DNA made only of 1s.")
            exit()
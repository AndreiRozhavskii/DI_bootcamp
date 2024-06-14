import datetime

class Airline:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.planes = []

class Airplane:
    def __init__(self, id, current_location, company):
        self.id = id
        self.current_location = current_location
        self.company = company
        self.next_flights = []

    def fly(self, destination):
        for flight in self.next_flights:
            if flight.destination == destination:
                flight.take_off()
                flight.land()
                break

    def location_on_date(self, date):
        for flight in self.next_flights:
            if flight.date == date:
                return flight.destination
        return self.current_location

    def available_on_date(self, date, location):
        if self.location_on_date(date) != location:
            return False
        for flight in self.next_flights:
            if flight.date == date:
                return False
        return True

class Flight:
    def __init__(self, date, destination, origin, plane):
        self.date = date
        self.destination = destination
        self.origin = origin
        self.plane = plane
        self.id = destination.city + plane.company.id + str(date)

    def take_off(self):
        self.plane.current_location = None

    def land(self):
        self.plane.current_location = self.destination

class Airport:
    def __init__(self, city):
        self.city = city
        self.planes = []
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def schedule_flight(self, destination, date):
        for plane in self.planes:
            if plane.available_on_date(date, self):
                flight = Flight(date, destination, self, plane)
                self.scheduled_departures.append(flight)
                destination.scheduled_arrivals.append(flight)
                plane.next_flights.append(flight)
                break

    def info(self, start_date, end_date):
        for flight in self.scheduled_departures:
            if start_date <= flight.date <= end_date:
                print(f"Flight ID: {flight.id}, Destination: {flight.destination.city}, Date: {flight.date}")



# Create some Airline instances
airline1 = Airline("AA", "Airline A")
airline2 = Airline("BB", "Airline B")

# Create some Airport instances
airport1 = Airport("City1")
airport2 = Airport("City2")

# Create some Airplane instances and add them to the airlines and airports
plane1 = Airplane(1, airport1, airline1)
plane2 = Airplane(2, airport1, airline2)
airline1.planes.append(plane1)
airline2.planes.append(plane2)
airport1.planes.append(plane1)
airport1.planes.append(plane2)

# Print the planes in each airline
print("\nPlanes in each airline:")
print(f"{airline1.name}: {[plane.id for plane in airline1.planes]}")
print(f"{airline2.name}: {[plane.id for plane in airline2.planes]}")

# Print the planes in each airport
print("\nPlanes in each airport:")
print(f"{airport1.city}: {[plane.id for plane in airport1.planes]}")
print(f"{airport2.city}: {[plane.id for plane in airport2.planes]}")

# Schedule some flights
airport1.schedule_flight(airport2, datetime.date(2022, 1, 1))
airport1.schedule_flight(airport2, datetime.date(2022, 1, 2))

# Print the scheduled flights
print("\nScheduled flights:")
airport1.info(datetime.date(2022, 1, 1), datetime.date(2022, 1, 2))
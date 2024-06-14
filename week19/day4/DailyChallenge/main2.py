
import datetime

birthdate = input("Enter your birthdate (format: DD/MM/YYYY): ")
birthdate = datetime.datetime.strptime(birthdate, "%d/%m/%Y")

now = datetime.datetime.now()
age = now.year - birthdate.year
if now.month < birthdate.month or (now.month == birthdate.month and now.day < birthdate.day):
    age -= 1

candles = age % 10
leap_year = birthdate.year % 4 == 0 and (birthdate.year % 100 != 0 or birthdate.year % 400 == 0)

cake = """
   ___{}___
  |:H:a:p:p:y:|
__|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""
candles_str = "i" * candles
print(cake.format(candles_str))

if leap_year:
    print(cake.format(candles_str))

select * from customer

select concat(first_name,' ',last_name) as full_name from customer 

select distinct(create_date) from customer

select * from customer 
order by first_name desc

select * from rental

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year, rental_rate from film
order by rental_rate asc

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

select address, phone from address where district='Texas'

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.

select * from film where film_id=15 or film_id =150

-- Write a query which should check if your favorite movie exists in the database. 
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

select film_id, title, description, length, rental_rate from film where title like 'The Gentlmen'

-- No luck finding your movie? Maybe you made a mistake spelling the name. 
-- Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

select film_id, title, description, length, rental_rate from film where title like 'Th%'

-- Write a query which will find the 10 cheapest movies.

select title, replacement_cost from film 
order by replacement_cost asc limit 10


-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

select title, replacement_cost from film 
order by replacement_cost asc limit 10 offset 10

-- Write a query which will join the data in the customer table and the payment table. 
-- You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, 
-- ordered by their id (from 1 to…).

select first_name, last_name, amount, payment_date from customer 
inner join payment
on customer.customer_id=payment.customer_id


-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from inventory
select * from film 

-- Write a query to find which city is in which country.
select ci.city,co.country from city ci
inner join country co
on ci.country_id=co.country_id



-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
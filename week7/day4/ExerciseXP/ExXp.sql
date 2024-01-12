--EXERCISE1

--Get a list of all the languages, from the language table.
select * from language

--Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select title, description, name from  film
inner join language
on language.language_id=film.language_id

--Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

select title, description, name from  film
right join language
on language.language_id=film.language_id

--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
	id serial primary key,
	name varchar(100) not null unique
)

insert into new_film(name)
values ('Harry Potter'),('Hobbits'),('The Lord of the Rings')

select * from new_film

--Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--It should have the following columns:
--review_id – a primary key, non null, auto-increment.
--film_id – references the new_film table. The film that is being reviewed.
--language_id – references the language table. What language the review is in.
--title – the title of the review.
--score – the rating of the review (1-10).
--review_text – the text of the review. No limit on the length.
--last_update – when the review was last updated.
select * from language
drop table customer_review
create table customer_review(
	review_id serial primary key not null,
	film_id integer references new_film(id) ON DELETE CASCADE,
	language_id integer,
	title varchar(100),
	score integer,
	review_text varchar,
	last_update date
	
			
)
 --Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

insert into customer_review(film_id, language_id,title,score,review_text,last_update)
values (1,1,'Great movie',10,'The film bout the young wizard','10/01/2024'),
(4,1,'Epic battles',9,'Great scenes of battle and sence of humor', '10/01/2024')

--Delete a film that has a review from the new_film table, what happens to the customer_review table? When we remove element from parent table it's removed from child as well because of cascade

delete from new_film where name like 'Hobbits'

--EXERCISE 2
select * from film
update film
set language_id=3
where (title = '%in')

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

select * from rental where (return_date is null)

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

select * from rental
inner join inventory
on rental.inventory_id = inventory.inventory_id
left join film on inventory.film_id=film.film.id
where rental.return_date is null
order by film.replacement_cost desc
limit 30

--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select film.film_id,film.title, film.fulltext from film_actor
inner join film on film.film_id=film_actor.film_id
where actor_id=(select actor_id from actor where(first_name='Penelope' AND last_name='Monroe') 
AND film.fulltext @@ to_tsquery('english','sumo'))

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.

select * from film 
inner join film_category on film.film_id=film_category.film_id
inner join category on category.category_id=film_category.category_id
where length < 60 AND rating='R' AND category.name='Documentary'

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

select * from inventory
inner join film on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=inventory.inventory_id
inner join customer on customer.customer_id=rental.customer_id
where customer.first_name='Matthew' 
and customer.last_name='Mahan' 
and film.rental_rate>4
and rental.return_date >'2005-07-28'
and rental.return_date < '2005-08-01'

--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

select * from inventory
inner join film on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=inventory.inventory_id
inner join customer on customer.customer_id=rental.customer_id
where customer.first_name='Matthew' 
and customer.last_name='Mahan' 
and (film.title ilike '%boat%' or film.description ilike '%boat%')
order by film.replacement_cost
limit 1


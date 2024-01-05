CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Angelina','Jolie','04/06/1975', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Jannifer','Aniston','11/02/1969', 0);


update actors set first_name='Jannifer', last_name ='Aniston' where age='11/02/1969'

select count(*) from actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Tom','09/07/1956');

--part 1
create table customer(
	id serial primary key,
	first_name varchar(50),
	last_name varchar (50) not null
)

create table customer_profile(
	id serial,
	isLoggedIn boolean,
	customer_id integer REFERENCES customer(id)
	
)

insert into customer(first_name, last_name)
values('John','Doe'),('Jerome', 'Lalu'),('Lea', 'Rive')

insert into customer_profile(isLoggedIn,customer_id)
values (true, 1),(false,2)

--The first_name of the LoggedIn customers

select  first_name from customer
inner join customer_profile
on customer.id=customer_profile.customer_id
where isLoggedIn=true

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

select  first_name,isLoggedIn from customer
left join customer_profile
on customer.id=customer_profile.customer_id

--The number of customers that are not LoggedIn

select count(*) from customer
inner join customer_profile
on customer.id=customer_profile.customer_id
where isLoggedIn=false 


--Part 2
drop table book
create table book(
	book_id serial primary key,
	title varchar(100) not null,
	author varchar (100) not null
)

insert into book(title,author)
values ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

create table student(
	student_id serial primary key,
	name varchar(50) not null unique,
	age integer check (age>0 and age<=16)
	
)

insert into student(name, age)
values('John', 12),('Lera', 11),('Patrick', 10),('Bob', 14)

create table library(
	book_id integer REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id integer REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrow_date date
)

insert into library(student_id,book_id,borrow_date)
values (1,1,'15/02/2022'),
(4,3,'03/03/2021'),
(2,1,'23/05/2021'),
(4,2,'12/08/2021')

--Select all the columns from the junction table
select * from library

--Select the name of the student and the title of the borrowed books

select student.name,book.title from library
inner join student
on library.student_id=student.student_id
inner join book
on library.book_id=book.book_id

--Select the average age of the children, that borrowed the book Alice in Wonderland

select avg(student.age) from library
inner join student
on library.student_id=student.student_id
inner join book
on library.book_id=book.book_id
where title like 'Alice In Wonderland'


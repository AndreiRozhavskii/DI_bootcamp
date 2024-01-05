create table students(
	name_id serial,
	last_name varchar(100),
	first_name varchar(100),
	birth_date date
	
)

insert into students(first_name,last_name,birth_date)
values ('Marc','Benichou','02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Lea','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Omer','Simpson','03/10/1980')

select * from students

select last_name,first_name from students

select last_name,first_name from students
where name_id =2

select last_name,first_name from students
where last_name like 'Benichou' AND first_name='Marc'

select last_name,first_name from students
where last_name like 'Benichou' OR first_name='Marc'

select last_name,first_name from students
where first_name like '%a%'

select last_name,first_name from students
where first_name like 'a%'

select last_name,first_name from students
where first_name like '%a'

select last_name,first_name from students
where first_name like '%a%' or first_name like '%a'

select last_name,first_name from students
where name_id =1 or name_id=3

select * from students
where birth_date >= '1/01/2000'

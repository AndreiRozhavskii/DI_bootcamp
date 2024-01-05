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

select last_name from students
where name_id<=4
order by last_name ASC

select * from students
where birth_date = (select max(birth_date) from students)

select * from students limit 3 offset 2

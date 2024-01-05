create table customers(
	name_id serial,
	first_name varchar(100),
	last_name varchar(100)
)

insert into items(product_name,Product_price)
values('Small Desk',100),('Large desk',300),('Fan',80)

insert into customers (first_name,last_name)
values ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson')


select * from items
select * from customers

select product_name,product_price from items
where product_price>80

select product_name,product_price from items
where product_price<300

select * from customers
where last_name = 'Smith'

select * from customers
where last_name = 'Jones'

select * from customers
where first_name <> 'Scott'

alter table items drop column product_id
alter table customers drop column name_id


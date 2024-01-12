create table products(
    id serial primary key,
	name varchar(50) not null,
	price integer
)

create table product_desc(
    id serial primary key,
	description varchar(500),
	product_id integer
)

insert into products(price,name)
values
(700,'iPad'),(800,'iPhone'),(600,'iWatch'),(900,'iCar')

insert into product_desc (description, product_id)
values
('Great iPhone',2)

select products.name,products.price, product_desc.description from products
left join product_desc
on products.id=product_desc.product_id

drop table product_desc

create table product_desc(
    id serial primary key,
	description varchar(500),
	product_id integer,
	constraint fk_product_id
	    foreign key (product_id)
			references products(id)
)

insert into product_desc (description, product_id)
values
('Amazing iPad',1),
('Great iPhone',2),
('Best iWatch',3)
('Fastest car ever',4)

delete from products where id=1

alter table product_desc
drop constraint fk_product_id,
add constraint fk_prod_id
  foreign key (product_id)
  	references products(id)
		on delete cascade
		
	--one to one
	
create table users(
	id serial primary key,
	username varchar(50) unique not null
	--- other user info
)

create table users_info(
	id serial,
	first_name varchar(50),
	--....
	user_id integer unique
		references users(id)
)


-- one to many

create table authors(
	id serial primary key,
	username varchar(50) unique not null
	--- other user info
)

create table table_posts(
	post_id serial,
	title varchar(50),
	--....
	author_id integer 
		references authors(id)
)



		
		
		












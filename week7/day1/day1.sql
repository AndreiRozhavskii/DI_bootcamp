select 
		customer.first_name, 
 		customer.last_name, 
		address.address,
		address.district,
		city.city,
		country.country
		
from customer
inner join address
on customer.address_id = address.address_id

inner join city
on address.city_id=city.city_id

inner join country
on city.country_id=country.country_id



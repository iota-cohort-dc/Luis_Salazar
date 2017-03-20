1) SELECT customer.first_name, customer.last_name, customer.email, address.address, address.address2, address.postal_code
FROM customer
	JOIN address ON customer.address_id = address.address_id
WHERE city_id = 312;

2)SELECT title, description, release_year, rating, special_features,category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
where category.name = 'comedy'

3)select actor.actor_id, concat(actor.first_name," ",actor.last_name) as actor_name, title, description,release_year
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
where actor.actor_id = 5

4)select store_id, address.city_id, first_name, last_name, email, address.address
from customer
join address on customer.address_id = address.address_id
where customer.store_id = 1 and city_id in (1,42,312,459)

5)select actor.actor_id,title, description,release_year,rating,special_features
from film
Join film_actor on film.film_id = film_actor.film_id
join actor on  film_actor.actor_id = actor.actor_id
where actor.actor_id = 15 
and rating = 'G'
and special_features like '%behind the scenes%'

6)select film.film_id, title, actor.actor_id, concat(actor.first_name,' ',actor.last_name) as actor_name
from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where film.film_id = 369

7)select film.film_id, title, description, release_year, rating, special_features,concat(category.name) as genre, rental_rate
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where category.name = 'drama'and rental_rate = 2.99

8)select actor.actor_id, concat(actor.first_name, ' ' ,actor.last_name) as actor_name, film.film_id, title, description, release_year, rating, special_features, concat(category.name) as genre
from film
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where actor.last_name = 'kilmer' and actor.first_name = 'sandra' and category.name = 'action'

first 3 sucked but prepped you to make the rest easy...
What query would you run to get all the countries that speak Slovene. Your query should return the name of the
country, language and language percentage. You query should arrange the result by language percentage in
descending order.

select countries.name, languages.language, languages.percentage
from countries
join languages on countries.id = languages.country_id
where language = 'slovene'
order by language desc

What query would you run to display the total number of cities for each country. Your query should return the
name of the country and the total number of cities. You query should arrange the result by number of cities in
descending order.

SELECT countries.name, count(*) as city
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.name
order by city desc

What query would you run to get all the cities in Mexico with a population of greater than 500,000. Your query
should arrange the result by population in descending order.

select cities.name, cities.population
from countries
join cities on countries.id = cities.country_id
where countries.name = 'Mexico' and cities.population > 500000
order by cities.population desc

4. What query would you run to get all language in each country with a percentage greater than 89%. Your query
should arrange the result by percentage in descending order.

select countries.name, languages.language, languages.percentage
from countries
join languages on countries.id = languages.country_id
where languages.percentage >=89
order by languages.percentage desc

What query would you run to get all the countries with Surface Area below 501 and Population greater than
100,000.

select name,surface_area,population from countries
where surface_area < 501 and population > 100000

What query would you run to get all Constitutional Monarchy Countries with a capital greater than 200 and a life
expectancy greater than 75 years.

select name,government_form,capital,life_expectancy from countries
where capital > 200 and life_expectancy > 75 and government_form = 'constitutional monarchy'

What query would you run to get all the cities of Argentina inside the Buenos Aires district and have population
greater than 500, 000. The query should return the Country Name, City Name, District and Population.

select countries.name, cities.name, cities.district, cities.population
from countries
join cities on countries.id = cities.country_id
where countries.name = 'argentina' and cities.district = 'buenos aires' and cities.population > 500000

What query would you run to summarize the number of countries in each region. The query should display the
name of the region and the number of countries. Also, the query should arrange the result by number of
countries in descending order.
select region,count(name) as Countries from countries
group by region
order by countries desc

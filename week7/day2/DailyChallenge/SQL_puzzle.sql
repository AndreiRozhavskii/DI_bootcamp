CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab
 --Q1 
 --Answer 0, becasue Null isn't a value
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

--Q2
--Answer is 2, because we'll get only 6 and 7 rows, because null isn't a value

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--Q3
--Answer 0, because we can't compare something with null

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--Q4
--Answer 2, because we can compare 5 with 6 and 7 but can't with NULL

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

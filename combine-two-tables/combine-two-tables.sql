# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State FROM PERSON LEFT JOIN ADDRESS ON Person.PersonId = Address.PersonId;
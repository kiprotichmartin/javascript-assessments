use SQLASSESSMENT;
GO

/**********QUESTION 1**********/
/*****************************/

/*
CREATE TABLE Employees (
	EmployeeID INT PRIMARY KEY IDENTITY(1,1),
	EmployeeName VARCHAR(50),
	City VARCHAR(50)
);

GO

CREATE TABLE Sales (
	SalesID INT PRIMARY KEY IDENTITY(1,1),
	SalesTotal INT NOT NULL,
	EmployeeID INT NOT NULL FOREIGN KEY REFERENCES Employees(EmployeeID)
);

GO

INSERT INTO Employees (EmployeeName, City)
VALUES
	('Martin Kiprotich', 'Eldoret'),
	('Sami Wafula', 'Nyeri'),
	('Yvonne', 'Nairobi'),
	('Michael', 'Nairobi'),
	('Moses', 'Eldoret');

GO

INSERT INTO Sales (SalesTotal, EmployeeID)
VALUES
	(5, 1),
	(10, 2),
	(0, 3),
	(0, 4),
	(1, 5);

GO

SELECT Employees.EmployeeName, Sales.SalesTotal
FROM Employees
INNER JOIN Sales ON Employees.EmployeeID=Sales.EmployeeID
WHERE Sales.SalesTotal < 1;
*/

--DROP TABLE Employees;
--DROP TABLE Sales;



/**********QUESTION 2**********/
/*****************************/

/*
CREATE TABLE Customers (
	CustomerID INT PRIMARY KEY IDENTITY(1,1),
	CustomerName VARCHAR(50) NOT NULL,
	ContactName VARCHAR(50) NOT NULL,
	AddressName VARCHAR(50),
	City VARCHAR(50),
	PostalCode INT,
	Country VARCHAR(50) NOT NULL
);

GO

INSERT INTO Customers (CustomerName, ContactName, AddressName, City, PostalCode, Country)
VALUES
	('Martin Kiprotich', 'Martin', 'Mediheal', 'Eldoret', 30100, 'Kenya'),
	('Sami Wafula', 'Sami', 'KDS', 'Nyeri', 10100, 'Kenya'),
	('Yvonne Macharia', 'Yvone', 'Kiambu', 'Nairobi', 00100, 'Kenya'),
	('Michael Kamau', 'Michael', 'Limuru', 'Nairobi', 00100, 'Kenya'),
	('Moses Cheboi', 'Moses', 'Nandi', 'Eldoret', 30100, 'Rwanda'),
	('Simiyu Sydney', 'Sydney', 'King Rd', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Sydney', 'King Rd', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Sydney', 'King Rd', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Sydney', 'King Rd', 'Kinshasa', 55089, 'Angola');

GO

SELECT COUNT(CustomerName), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerName) > 3
ORDER BY Country DESC;
*/

--DROP TABLE Customers;



/**********QUESTION 3**********/
/******************************/

/*
CREATE TABLE EmployeeDetails (
	EmployeeID INT PRIMARY KEY IDENTITY(1,1),
	EmployeeName VARCHAR(50) NOT NULL,
	ContactName VARCHAR(50) NOT NULL,
	AddressName VARCHAR(50),
	City VARCHAR(50),
	PostalCode INT,
	Country VARCHAR(50) NOT NULL
);

GO

INSERT INTO EmployeeDetails (EmployeeName, ContactName, AddressName, City, PostalCode, Country)
VALUES
	('Martin Kiprotich', 'Martin', 'Mediheal', 'Eldoret', 30100, 'Kenya'),
	('Sami Wafula', 'Sami', 'KDS', 'Nyeri', 10100, 'Kenya'),
	('Yvonne Macharia', 'Yvone', 'Kiambu', 'Nairobi', 00100, 'Kenya'),
	('Michael Kamau', 'Michael', 'Limuru', 'Nairobi', 00100, 'Kenya'),
	('Moses Cheboi', 'Moses', 'Nandi', 'Eldoret', 30100, 'Rwanda'),
	('Simiyu Sydney', 'Sydney', 'King Rd', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Simiyu', 'Queens', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Tripple S', 'Prince Rd', 'Kinshasa', 55089, 'Angola'),
	('Simiyu Sydney', 'Sande', 'Habibi', 'Kinshasa', 55089, 'Angola');

GO

SELECT EmployeeName, COUNT(EmployeeName) AS DuplicateTimes
FROM EmployeeDetails
GROUP BY EmployeeName
HAVING COUNT(EmployeeName) > 1;
*/

--DROP TABLE EmployeeDetails;



/**********QUESTION 4**********/
/*****************************/

/*
SELECT *
FROM EmployeeDetails
HAVING COUNT(EmployeeID) > 1;
*/
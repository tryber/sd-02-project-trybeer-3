CREATE DATABASE IF NOT EXISTS trybeer;

USE trybeer;

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30),
    name VARCHAR(100) NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    product_price FLOAT NOT NULL,
    PRIMARY KEY(product_id)
);

CREATE TABLE Orders (
    order_id INT NOT NULL AUTO_INCREMENT,
    delivered BOOLEAN NOT NULL,
    PRIMARY KEY(order_id)
);

CREATE TABLE Order_Products (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity FLOAT NOT NULL,
    order_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

INSERT INTO Users (email, password, name, role)
VALUES
    ('folgado@gmail.com', '123456', 'Folgado', 'client'),
    ('gi@gmail.com', '123456', 'Gi', 'client'),
    ('pedro@gmail.com', '123456', 'Pedro', 'client'),
    ('roz@wpp.com', '123456', 'Roz', 'admin');
    
    
INSERT INTO Products (product_name, product_price)
VALUES
    ('Skol Lata 350ml', '2.20'),
	('Heineken 600ml', '7.50'),
	('Antarctica Pilsen 300ml', '2.49'),
	('Brahma 600ml', '7.50'),
	('Skol 269ml', '2.19'),
	('Skol Beats Senses 313ml', '4.49'),
	('Becks 330ml', '4.99'),
	('Brahma Duplo Malte 350ml', '2.79'),
	('Becks 600ml', '8.89'),
	('Skol Beats Senses 269ml', '3.57'),
	('Stella Artois 275ml', '3.49');
    
INSERT INTO Orders (delivered)
VALUES
	(TRUE),
    (TRUE),
    (FALSE);
    
INSERT INTO Order_Products (product_id, quantity, order_id) 
VALUES
	(1, 2, 1),
    (1,6 , 2),
    (1, 3, 3),
    (3, 4, 1),
    (4, 1, 1),
    (5, 1, 2),
    (5, 2, 3);
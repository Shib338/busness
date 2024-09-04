-- SQL to create a table for storing data
CREATE TABLE BusinessData (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    borrowing DECIMAL(10, 2) NOT NULL,
    real_money DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

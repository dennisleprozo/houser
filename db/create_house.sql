INSERT INTO Houses(
    name, 
    address, 
    city, 
    state, 
    zip, 
    img_url, 
    mortgage, 
    rent
) 
VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8);






-- Create this table in SQL Tabs

    -- CREATE TABLE Houses(id SERIAL PRIMARY KEY, name VARCHAR(30), address VARCHAR(100), city VARCHAR(100), state VARCHAR(2), zip INTEGER, img TEXT, mortgage DECIMAL, rent DECIMAL
    -- );  
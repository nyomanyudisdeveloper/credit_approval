CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	role TEXT NOT NULL,
	crud_status TEXT NOT NULL DEFAULT 'A'
	counter_total_login INT NOT NULL DEFAULT 0
)

CREATE TABLE occupations (
	id SERIAL PRIMARY KEY NOT NULL ,
	name_job VARCHAR(50),
	crud_status CHAR(1)
);

CREATE TABLE districts (
	id SERIAL PRIMARY KEY NOT NULL, 
	city_id INT REFERENCES citys(id),
	name VARCHAR(50),
	crud_status CHAR(1)
)

CREATE TABLE citys (
	id SERIAL PRIMARY KEY NOT NULL, 
	province_id INT REFERENCES provinces(id),
	name VARCHAR, 
	crud_status CHAR(1)
)

CREATE TABLE provinces (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50),
	crud_status CHAR(1)
)


CREATE TABLE client (
	id SERIAL PRIMARY KEY NOT NULL,
	birth_place VARCHAR(100) NOT NULL,
	birth_date DATE NOT NULL,
	gender VARCHAR(1) NOT NULL,
	occupation_id INT REFERENCES occupations (id) NOT NULL,
	province_id INT REFERENCES provinces(id),
	city_id INT REFERENCES cities(id),
	district_id INT REFERENCES disctricts(id),
	rt INT,
	rw INT,
	crud_status CHAR(1) NOT NULL
)

CREATE TABLE client_status (
	id SERIAL PRIMARY KEY NOT NULL,
	client_id INT REFERENCES clients(id),
	status VARCHAR(50) NOT NULL, 
	nominal_payment INT,
	crud_status CHAR(1) NOT NULL
)
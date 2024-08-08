-- Create the Category table
CREATE TABLE Category (
  category_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Create the Dish table
CREATE TABLE Dish (
  dish_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  imageUrl TEXT NOT NULL,
  price INTEGER NOT NULL,
  spiceLevel TEXT,
  category_id INTEGER NOT NULL REFERENCES Category(category_id)
);

-- Create the Reservation table
CREATE TABLE Reservation (
  reservation_id SERIAL PRIMARY KEY,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  dish_id INTEGER NOT NULL REFERENCES Dish(dish_id)
);
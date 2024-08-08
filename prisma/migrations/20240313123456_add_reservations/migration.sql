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
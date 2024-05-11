import React, { useState } from "react";
import "./App.css";
const moviesData = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
  },
  { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 },
  { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
  { title: "Pulp Fiction", genre: "Crime", year: 1994, rating: 8.9 },
  { title: "Schindler's List", genre: "Biography", year: 1993, rating: 8.9 },
  // Add more movie data as needed
];

const App = () => {
  const [filters, setFilters] = useState({ genre: "", year: "", rating: "" });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredMovies = moviesData.filter((movie) => {
    return (
      (filters.genre === "" || movie.genre === filters.genre) &&
      (filters.year === "" || movie.year === parseInt(filters.year)) &&
      (filters.rating === "" || movie.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div>
      <h1>Movies Filtering App</h1>
      <div>
        <label>
          Genre:
          <select
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            {/* Add more genres as needed */}
          </select>
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        <h2>Filtered Movies:</h2>
        <ul>
          {filteredMovies.map((movie, index) => (
            <li key={index}>
              {movie.title} ({movie.year}) - {movie.genre} - Rating:{" "}
              {movie.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

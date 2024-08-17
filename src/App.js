import Display from "./components/Display";
import SearchBar from "./components/SearchBar";
import React, { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  // const [searchMovies, setSearchMovies]=useState([]);
  const [searchData, setSearchData] = useState('');
  const [yearData, setYearData]=useState('');
  const [ratingData, setRatingData]=useState('');
  const [genreData, setGenreData]=useState('');
  const data = [
    { title: 'Stree 2', year: '2024' },
    { title: 'Twisters', year: '2024' },
    { title: 'Titanic', year: '1997' },
    { title: 'Sholay', year: '1975' },
    { title: 'Restore Point', year: '2023' }
  ];

  useEffect(() => {

    async function fethAllMovies() {
      try {
        const results = await Promise.all(
          data.map(item => fetchMovieDetails(item.title, item.year))
        );
        setMovies(results);

      } catch (error) {
        console.error('Error in fething movies details', error);
      }
    }

    async function fetchMovieDetails(title, year) {
      const apiKey = '58f0093f'; // Your OMDb API key
      const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&y=${year}&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const movieData = await response.json();
        if (movieData.Response === "False") {
          throw new Error(movieData.Error);
        }
        return movieData;
      } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
      }
    }

    fethAllMovies();

  }, []);

  const filterData = movies.filter(
    (item) =>
      item?.Title?.toLowerCase().includes(searchData.toLowerCase()) &&
      (yearData ==='' || item?.Year === yearData) &&
      (ratingData === '' || parseFloat(item?.imdbRating) >= parseFloat(ratingData)) &&
      (genreData==''|| item?.Genre?.toLowerCase().includes(genreData.toLowerCase()))
  );
  console.log(movies);
  return (
    <div className="grid grid-cols-4 h-screen gap-4 bg-black">
      <div className="col-span-1 border border-white p-4">
        <SearchBar
          searchData={searchData} setSearchData={setSearchData}
          yearData={yearData} setYearData={setYearData}
          ratingData={ratingData} setRatingData={setRatingData}
          genreData={genreData} setGenreData={setGenreData}
        />
      </div>
      <div className="col-span-3 overflow-auto border border-red-500 p-4">
        <Display filterData={filterData} />
      </div>
    </div>
  );
}

export default App;

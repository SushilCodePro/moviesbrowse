import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Display from "./components/Display";
import SearchBar from "./components/SearchBar";
import FavDisplay from "./components/FavDisplay";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [yearData, setYearData] = useState('');
  const [ratingData, setRatingData] = useState('');
  const [genreData, setGenreData] = useState('');
  const [addData, setAddData] = useState(() => {
    const savedData = localStorage.getItem('favorite');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [favData, setFavData] = useState(0);

  const data = [
    { title: 'Stree 2', year: '2024' },
    { title: 'Twisters', year: '2024' },
    { title: 'Titanic', year: '1997' },
    { title: 'Sholay', year: '1975' },
    { title: 'Restore Point', year: '2023' },
    { title: 'Laapataa Ladies', year: '2023' },
    { title: 'Avatar: The Way of Water', year: '2022' },
    { title: 'Interstellar', year: '2014' },
    { title: 'Dawn of the Planet of the Apes', year: '2014' },
    { title: 'Hera Pheri', year: '2000' },
    { title: 'The Matrix', year: '1999' },
    { title: 'The Conjuring', year: '2013' }
  ];

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const results = await Promise.all(
          data.map(item => fetchMovieDetails(item.title, item.year))
        );
        setMovies(results);
      } catch (error) {
        console.error('Error fetching movie details', error);
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

    fetchAllMovies();
  }, [data]);

  const filterData = useMemo(() => {
    return movies.filter(
      (item) =>
        item?.Title?.toLowerCase().includes(searchData.toLowerCase()) &&
        (yearData === '' || item?.Year === yearData) &&
        (ratingData === '' || parseFloat(item?.imdbRating) >= parseFloat(ratingData)) &&
        (genreData === '' || item?.Genre?.toLowerCase().includes(genreData.toLowerCase()))
    );
  }, [movies, searchData, yearData, ratingData, genreData]);

  const handleAdd = useCallback((id) => {
    const tempData = movies.find(addValue => addValue.imdbID === id);
    const exists = addData.some(item => item.imdbID === id);
    if (!exists && tempData) {
      setAddData(prev => [...prev, tempData]);
    }
  }, [movies, addData]);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(addData));
  }, [addData]);

  const handleFav = useCallback(() => {
    setFavData(prev => prev + 1);
  }, []);

  const handleHome = useCallback(() => {
    setFavData(0);
  }, []);

  const handleRemove = useCallback((id) => {
    setAddData(prev => prev.filter(removeValue => removeValue.imdbID !== id));
  }, []);

  return (
    <div className="grid sm:grid-cols-5 h-screen gap-4 bg-black">
      <div className="sm:col-span-1 border border-white p-4">
        <SearchBar
          searchData={searchData} setSearchData={setSearchData}
          yearData={yearData} setYearData={setYearData}
          ratingData={ratingData} setRatingData={setRatingData}
          genreData={genreData} setGenreData={setGenreData}
          handleFav={handleFav}
        />
      </div>
      <div className="sm:col-span-4 overflow-auto border border-red-500 p-4">
        {favData ? (
          <FavDisplay addData={addData} handleHome={handleHome} handleRemove={handleRemove} />
        ) : (
          <Display filterData={filterData} handleAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}

export default App;

import { useCallback } from "react";

function SearchBar({ searchData, setSearchData, yearData, setYearData, ratingData, setRatingData, genreData, setGenreData,handleFav }) {

  const handleSearch = useCallback((e) => {
    setSearchData(e.target.value);
  }, [setSearchData]); // Add 'setSearchData' to the dependency array
  
  const handleYear = useCallback((e) => {
    setYearData(e.target.value);
  }, [setYearData]); // Add 'setYearData' to the dependency array
  
  const handleRating = useCallback((e) => {
    setRatingData(e.target.value);
  }, [setRatingData]); // Add 'setRatingData' to the dependency array
  
  const handleGenre = useCallback((e) => {
    setGenreData(e.target.value);
  }, [setGenreData]); // Add 'setGenreData' to the dependency array
  
  
  return (
    <div className=" flex flex-col space-y-2">
      <input
        type="text"
        name="search"
        value={searchData}
        placeholder="Search here ... "
        className="p-2 rounded mb-10"
        onChange={handleSearch}
        aria-label="Search Movies"
      />
      <button
        className="p-2 text-white font-bold border border-white bg-green-500 rounded"
        onClick={handleFav}
        aria-label="Add to Favorites"
      >
        Favorite
      </button>
      <select
        value={yearData}
        name="years"
        onChange={handleYear}
        className="border border-gray-300 p-2 mb-2 rounded bg-blue-300"
        aria-label="Filter by Year"
      >
        <option value="">Filter by Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1997">1997</option>
        <option value="1975">1975</option>
      </select>
      <select
        value={ratingData}
        name="rating"
        onChange={handleRating}
        className="border border-gray-300 p-2 mb-2 rounded bg-blue-300"
        aria-label="Filter by Rating"
      >
        <option value="">Filter by Rating</option>
        <option value="9">9 and above</option>
        <option value="8">8 and above</option>
        <option value="7">7 and above</option>
        <option value="6">6 and above</option>
        <option value="5">5 and above</option>
        <option value="4">4 and above</option>
        <option value="3">3 and above</option>
        <option value="2">2 and above</option>
        <option value="1">1 and above</option>
      </select>

      <select
        value={genreData}
        name="genre"
        onChange={handleGenre}
        className="border border-gray-300 p-2 mb-2 rounded bg-blue-300"
        aria-label="Filter by Genre"
      >
        <option value="">Filter by Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  );
}

export default SearchBar;

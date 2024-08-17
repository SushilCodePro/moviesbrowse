

function SearchBar({ searchData, setSearchData, yearData, setYearData, ratingData, setRatingData, genreData, setGenreData }) {

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  }
  const handleYear = (e) => {
    setYearData(e.target.value);
  }
  const handleRating = (e) => {
    setRatingData(e.target.value);
  }
  const handleGenre = (e) => {
    setGenreData(e.target.value);
  }
  return (
    <div className=" flex flex-col space-y-2">
      <input
        type="text"
        name="search"
        value={searchData}
        placeholder="Search here ... "
        className="p-2 rounded"
        onChange={handleSearch}
      />
      <button className="p-2 text-white font-bold border border-white bg-green-500 rounded">Favorite</button>
      <select
        value={yearData}
        name="years"
        onChange={handleYear}
        className="border border-gray-300 p-2 mb-2 rounded bg-yellow-100"
      >
        <option value="">Filter by Years</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="1997">1997</option>
        <option value="1975">1975</option>
      </select>
      <select
        value={ratingData}
        name="rating"
        onChange={handleRating}
        className="border border-gray-300 p-2 mb-2 rounded bg-yellow-100"
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
        className="border border-gray-300 p-2 mb-2 rounded bg-yellow-100"
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

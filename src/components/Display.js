

function Display({ filterData }) {

  return (
    <div className="grid grid-cols-4 gap-2">
      {filterData.map((singleData) => (
        <div key={singleData.imdbID} className="border border-white h-66 text-white p-1 rounded">
          <img src={`${singleData.Poster}`} className='h-52 w-56' />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-xl">{singleData.Title}</p>
              <p className="text-neutral-200 text-opacity-45 text-sm">{singleData.Year}</p>
            </div>
            <div>
              <button className="p-1 text-white border border-white bg-green-500 rounded">Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;



function Display({ filterData, handleAdd }) {

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      {filterData.map((singleData) => (
        <div key={singleData.imdbID} className="border border-white h-66 text-white p-1 rounded">
          <img src={`${singleData.Poster}`} className='h-52 w-full' alt=""/>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-xl">{singleData.Title}</p>
              <p className="text-neutral-200 text-opacity-45 text-sm">{singleData.Year}</p>
            </div>
            <div>
              <button 
              className="p-1 text-white border border-white bg-green-500 rounded"
              onClick={()=>handleAdd(singleData.imdbID)}
              >
              Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;

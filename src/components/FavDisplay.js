function FavDisplay({ addData, handleHome, handleRemove }) {

    return (
        <div className="">
            <div className="flex justify-center mb-2">
                <button
                    className="p-2 text-white w-32 font-bold border border-white bg-green-500 rounded"
                    onClick={handleHome}
                >
                    Home
                </button>
            </div>

            <div className="grid grid-cols-4 gap-2">

                {addData.map((singleData) => (
                    <div key={singleData.imdbID} className="border border-white h-66 text-white p-1 rounded">
                        <img src={`${singleData.Poster}`} className='h-52 w-56' alt="" />
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-xl">{singleData.Title}</p>
                                <p className="text-neutral-200 text-opacity-45 text-sm">{singleData.Year}</p>
                            </div>
                            <div>
                                <button
                                    className="p-1 text-white border border-white bg-red-500 rounded"
                                    onClick={() => handleRemove(singleData.imdbID)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default FavDisplay;
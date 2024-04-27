function ArtCart({ art }) {
  const {
    itemName,
    subcategory,
    price,
    rating,
    photo,
    stock,
  } = art;
  return (
    <div className="">
      <div className="rounded-3xl  bg-base-100 border-4 border-gray-900 shadow-xl">
        <figure className="w-full bg-gray-900 rounded-xl relative">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-3xl bg-gray-900 rounded-b-none w-full"
          />
          <h3 className="text-white absolute bottom-2 bg-gray-900 p-2 px-4 rounded-full right-2 font-medium">
            {itemName}
          </h3>
          <div className="bg-[#FF00D3] text-white absolute top-3 left-3 p-1 w-8 h-8 flex items-center justify-center rounded-full">
            <i className="ri-heart-fill "></i>
          </div>
        </figure>
        <div className="py-4 px-4 items-center space-y-2 ">
          <h4 className="font-semibold text-gray-400">{stock}</h4>
          <h2 className="card-title">{subcategory}</h2>
          <div className=" flex justify-between items-center py-2">
            <h2 className="text-2xl font-bold text-[#FF00D3]">{price}</h2>
            <h2 className="flex items-center justify-center gap-1">
              <i className="ri-star-fill text-xl text-amber-400"></i>
              <h3 className="font-semibold">{rating}</h3>
            </h2>
          </div>
          <div className="card-actions">
            <button className="btn bg-gray-900 hover:bg-gray-600 text-white w-full rounded-xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtCart;

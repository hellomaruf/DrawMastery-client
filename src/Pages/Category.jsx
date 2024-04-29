import { Link, useLoaderData } from "react-router-dom";

function Category() {
  const loadedCategory = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="text-2xl font-semibold py-4 pb-6 mx-6 lg:mx-3">
        {loadedCategory?.length} Item found for Selected Category
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-3 lg:grid-cols-3 gap-6 ">
        {loadedCategory.map((item, index) => (
          <div key={index}>
            <div className="rounded-3xl  bg-base-100 border-4 border-gray-900 shadow-md">
              <figure className="w-full bg-gray-900 rounded-xl relative">
                <img
                  src={item?.image}
                  alt="Shoes"
                  className="rounded-3xl bg-gray-900 rounded-b-none w-full"
                />
                <h3 className="text-white absolute bottom-2 bg-gray-900 p-2 px-4 rounded-full right-2 font-medium">
                  {item?.item_name}
                </h3>
                <div className="bg-[#FF00D3] text-white absolute top-3 left-3 p-1 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="ri-heart-fill "></i>
                </div>
              </figure>
              <div className="py-4 px-4 items-center space-y-2 ">
                <h4 className="font-semibold text-gray-400">
                  {item?.stockStatus}
                </h4>
                <h2 className="card-title">{item?.subcategory_Name}</h2>
                        <p>{item?.short_description}</p>
                        <div className=" font-semibold text-lg"> <i className="ri-time-line pr-2 "></i>{ item?.processing_time}</div>
                <div className=" flex justify-between items-center py-2">
                  <h2 className="text-2xl font-bold text-[#FF00D3]">
                    {item?.price}
                  </h2>
                  <h2 className="flex items-center justify-center gap-1">
                    <i className="ri-star-fill text-xl text-amber-400"></i>
                    <h3 className="font-semibold">{item?.rating}</h3>
                  </h2>
                </div>
                <div className="card-actions">
                  <Link
                    to={`/artCategory/${item?._id}`}
                    className="btn bg-gray-900 hover:bg-gray-600 text-white w-full rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

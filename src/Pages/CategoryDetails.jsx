import { useLoaderData } from "react-router-dom";

function CategoryDetails() {
  const loadedData = useLoaderData();
  console.log(loadedData);
    return   <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 gap-10">
      <div className="col-span-1 p-10">
        <img className="w-full  rounded-xl" src={loadedData?.image} alt="" />
      </div>
      <div className="col-span-1 py-10">
        <div className=" flex mb-3">
          <h2 className="bg-gray-900 py-1 px-3 rounded-full text-white font-semibold">
            {loadedData?.stockStatus}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium text-[#ff00d3]">{loadedData?.item_name}</h1>
          <h2 className="flex items-center justify-center gap-1">
            <i className="ri-star-fill text-xl text-amber-400"></i>
            <h3 className="font-semibold">{loadedData?.rating}</h3>
          </h2>
        </div>
        <h1 className="text-3xl font-semibold py-2">{loadedData?.subcategory_Name}</h1>
        <div className="">
          <div className="py-3">
            <h2 className="text-xl text-gray-500">
              <i className="ri-time-line pr-4"></i>Processing time : {loadedData?.processing_time}
            </h2>
            <h2 className="text-xl text-gray-500">
              <i className="ri-edit-2-line pr-4"></i>customization :{" "}
              {loadedData?.customization}
            </h2>
          </div>
          <h2 className="text-5xl font-semibold text-[#ff00d3] py-6">
            {loadedData?.price}
          </h2>
          <div className="">
            <h3 className="font-bold text-lg pb-2">Description</h3>
            <p>{loadedData?.short_description}</p>
          </div>
         
        </div>
      </div>
    </div>
  </div>;
}

export default CategoryDetails;

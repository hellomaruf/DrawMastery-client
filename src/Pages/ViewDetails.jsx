import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Services/AuthProvider";

function ViewDetails() {
  const loadedArt = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    itemName,
    subcategory,
    price,
    rating,
    time,
    photo,
    description,
    customization,
    stock,
    userName,
    userEmail,
    } = loadedArt;
    
    
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-10 mx-6 lg:mx-3">
        <div className="col-span-1 lg:p-10">
          <img className="w-full  rounded-xl" src={photo} alt="" />
        </div>
        <div className="col-span-1 py-10">
          <div className=" flex mb-3">
            <h2 className="bg-gray-900 py-1 px-3 rounded-full text-white font-semibold">
              {stock}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-medium text-[#ff00d3]">{itemName}</h1>
            <h2 className="flex items-center justify-center gap-1">
              <i className="ri-star-fill text-xl text-amber-400"></i>
              <h3 className="font-semibold">{rating}</h3>
            </h2>
          </div>
          <h1 className="text-3xl font-semibold py-2">{subcategory}</h1>
          <div className="">
            <div className="py-3">
              <h2 className="text-xl text-gray-500">
                <i className="ri-time-line pr-4"></i>Processing time : {time} PM
              </h2>
              <h2 className="text-xl text-gray-500">
                <i className="ri-edit-2-line pr-4"></i>customization :{" "}
                {customization}
              </h2>
            </div>
            <h2 className="text-5xl font-semibold text-[#ff00d3] py-6">
              {price}
            </h2>
            <div className="">
              <h3 className="font-bold text-lg pb-2">Description</h3>
              <p>{description}</p>
            </div>
            <div className="flex items-center gap-4 mt-7">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="">
                <h3 className="font-semibold text-xl">
                  {userName}{" "}
                  <span className="font-normal text-[#ff00d3]">Artist</span>
                </h3>
                <h3 className="text-gray-500">{userEmail}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;

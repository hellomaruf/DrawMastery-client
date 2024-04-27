import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Services/AuthProvider";

function MyArt() {
  const { user } = useContext(AuthContext);
  const [myArt, setMyAry] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAry(data);
      });
  }, []);
  console.log(myArt);
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="text-center pb-8">
        <h2 className="font-right text-3xl">My Painting and Drawing</h2>
        <p className="py-2">
          Art is a collaboration between God and the artist, and the less the
          artist does the better
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {myArt.map((item, index) => (
          <div key={index} className="">
            <div className="rounded-3xl  bg-base-100 border-4 border-gray-900 shadow-md">
              <figure className="w-full bg-gray-900 rounded-xl relative">
                <img
                  src={item?.photo}
                  alt="Shoes"
                  className="rounded-3xl bg-gray-900 rounded-b-none w-full"
                />
                <h3 className="text-white absolute bottom-2 bg-gray-900 p-2 px-4 rounded-full right-2 font-medium">
                  {item?.itemName}
                </h3>
                <div className="bg-[#FF00D3] text-white absolute top-3 left-3 p-1 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="ri-heart-fill "></i>
                </div>
              </figure>
              <div className="py-4 px-4 items-center space-y-2 ">
                <h4 className="font-semibold text-gray-400">{item?.stock}</h4>
                <h2 className="card-title">{item?.subcategory}</h2>
                <div className=" flex justify-between items-center py-2">
                  <h2 className="text-2xl font-bold text-[#FF00D3]">
                    {item?.price}
                  </h2>
                  <h2 className="flex items-center justify-center gap-1">
                    <i className="ri-star-fill text-xl text-amber-400"></i>
                    <h3 className="font-semibold">{item?.rating}</h3>
                  </h2>
                </div>
                <div className=" flex gap-3">
                  <button className="btn flex-1 bg-gray-900 hover:bg-gray-600 text-white  rounded-xl">
                    Update
                  </button>
                  <button className="btn flex-1 bg-white border-2 border-gray-900 hover:bg-gray-200 text-gray-900  rounded-xl">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyArt;

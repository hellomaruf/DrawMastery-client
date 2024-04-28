import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyArt() {
  const { user } = useContext(AuthContext);
  const [displayArts, setDisplayArts] = useState([]);
  const [myArt, setMyArt] = useState([]);

  const handleArtsFilter = (filter) => {
    if (filter === "yes") {
      const artsYes = myArt.filter((arts) => arts.customization === "yes");
      setDisplayArts(artsYes);
    } else if (filter === "no") {
      const artsNo = myArt.filter((arts) => arts.customization === "no");
      setDisplayArts(artsNo);
    }
  };
  useEffect(() => {
    fetch(`https://draw-mastery-server.vercel.app/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArt(data);
        setDisplayArts(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you really want to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#030712",
      cancelButtonColor: "#ff00d3",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://draw-mastery-server.vercel.app/updateArts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = myArt.filter((art) => art?._id !== id);
            setMyArt(remaining);
            setDisplayArts(remaining);
            Swal.fire({
              title: "Deleted Painting Successfully",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Cool",
              confirmButtonColor: "#111827",
            });
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="text-center pb-8">
        <h2 className="font-right text-3xl">My Painting and Drawing</h2>
        <p className="py-2">
          Art is a collaboration between God and the artist, and the less the
          artist does the better
        </p>
      </div>

      <div className="dropdown dropdown-hover mb-12">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-gray-900 hover:bg-gray-700 text-white"
        >
          <i className="ri-filter-3-fill text-xl"></i>
          Filter
          <i className="ri-arrow-down-s-line"></i>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-gray-900 text-white border-2 border-white z-[1] menu p-2 shadow  rounded-box w-52"
        >
          
          <li onClick={() => handleArtsFilter("yes")} className=" border-b">
            <a>Yes</a>
          </li>
          <li onClick={() => handleArtsFilter("no")}>
            <a>No</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {displayArts.map((item, index) => (
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
                <h3>Customization : {item?.customization}</h3>
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
                  <Link
                    to={`/updateArts/${item?._id}`}
                    className="btn flex-1 bg-gray-900 hover:bg-gray-600 text-white  rounded-xl"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn flex-1 bg-white border-2 border-gray-900 hover:bg-gray-200 text-gray-900  rounded-xl"
                  >
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

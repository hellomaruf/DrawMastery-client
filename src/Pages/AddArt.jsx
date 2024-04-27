import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";

function AddArt() {
  const { user } = useContext(AuthContext);
  const handleAddedArt = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.item.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const artInfo = {
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
    };
    console.log(artInfo);
    fetch("http://localhost:3000/art", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(artInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Added Painting Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
            confirmButtonColor: "#111827",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="text-center pb-8 ">
        <h2 className="font-right text-3xl">Add Painting and Drawing</h2>
        <p className="py-2">
        Painting is easy when you don’t know how, but very difficult when you do
        </p>
      </div>
      <form
        onSubmit={handleAddedArt}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  border-2 bg-gray-50 border-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-lg font-medium">
                Item Name
              </label>
              <input
                required
                name="item"
                type="text"
                placeholder="Enter Item name"
                className="w-full rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-medium">
                Subcategory Name
              </label>
              <input
                required
                name="subcategory"
                type="text"
                placeholder="Enter Subcategory Name"
                className="w-full rounded-md p-2 outline-none border "
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-lg font-medium">
                Price
              </label>
              <input
                required
                name="price"
                type="text"
                placeholder="Enter Price"
                className="w-full rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-medium">
                Rating
              </label>
              <input
                required
                name="rating"
                type="text"
                placeholder="Enter Rating"
                className="w-full rounded-md p-2 outline-none border "
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-lg font-medium">
                User Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter Coffee Category"
                className="w-full rounded-md  p-2 outline-none border"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-lg font-medium">
                User Email
              </label>
              <input
                required
                name="details"
                type="email"
                placeholder="Enter Coffee Details"
                className="w-full rounded-md p-2 outline-none border "
              />
            </div>
          </div> */}
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full ">
              <label htmlFor="firstname" className="text-lg font-medium">
                Processing Time
              </label>
              <input
                required
                name="time"
                type="time"
                placeholder="Enter Photo URL"
                className="w-full rounded-md  p-2 outline-none border"
              />
            </div>

            <div className="col-span-full ">
              <label htmlFor="firstname" className="text-lg font-medium">
                Photo
              </label>
              <input
                required
                name="photo"
                type="text"
                placeholder="Enter Photo URL"
                className="w-full rounded-md  p-2 outline-none border"
              />
              <div className=" mt-5">
                <label htmlFor="firstname" className="text-lg font-medium">
                  Short Description
                </label>
                <input
                  required
                  name="description"
                  type="text"
                  placeholder="Enter a Short Description"
                  className="w-full rounded-md  p-2 outline-none border"
                />
              </div>
              <div className="flex pt-6">
                <h3 className="pr-5">customization</h3>
                <div className="flex items-center me-4">
                  <input
                    id="yes"
                    type="radio"
                    value="yes"
                    name="customization"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 "
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="no"
                    type="radio"
                    value="no"
                    name="customization"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300  "
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    No
                  </label>
                </div>
              </div>
              <div className="flex pt-6">
                <h3 className="pr-5">Stock Status</h3>
                <div className="flex items-center me-4">
                  <input
                    id="stock"
                    type="radio"
                    value="In Stock"
                    name="stock"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 "
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    In stock
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="stock"
                    type="radio"
                    value="Made to Order"
                    name="stock"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300  "
                  />
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Made to Order
                  </label>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <input
                className="bg-gray-900 text-white w-full mt-8 py-2 font-bold  rounded-lg"
                type="submit"
                value="Add a Art"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddArt;

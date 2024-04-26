function AddArt() {
  const handleAddedArt = () => {};
  return (
    <div className="max-w-7xl mx-auto">
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
          <div className="grid grid-cols-6 gap-4 col-span-full ">
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
          </div>
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
              <div className="flex pt-6">
                <h3 className="pr-5">customization</h3>
                <div className="flex items-center me-4">
                  <input
                    id="no"
                    type="radio"
                    value="no"
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
                    value="stock"
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
                    value="stock"
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

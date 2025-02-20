import { useLoaderData, Link} from "react-router-dom";

function AllArts() {
  let count = 1;
  const loadedArt = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="text-center pb-8">
        <h2 className="font-right text-3xl">All Painting and Drawing</h2>
        <p className="py-2">
        Art enables us to find ourselves and lose ourselves at the same time
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-[#FF00D3] hidden lg:block">Item Name</th>
              <th className="text-[#FF00D3]">Subcategory Name</th>
              <th className="text-[#FF00D3] hidden lg:block">Stock</th>
              <th className="text-[#FF00D3]">Price</th>
              <th></th>
            </tr>
          </thead>
          {loadedArt.map((item, index) => (
            <tbody key={index}>
              <tr className="hover">
                <th>{count++}</th>
                <td className=" hidden lg:block">{item?.itemName}</td>
                <td>{item?.subcategory}</td>
                <td className=" hidden lg:block">{item?.stock}</td>
                <td>{item?.price}</td>
                <td>
                  <Link to={`/viewDetails/${item?._id}`} className="btn  bg-white border-2 border-gray-900 hover:bg-gray-200 text-gray-900  rounded-xl">
                    View Details
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AllArts;

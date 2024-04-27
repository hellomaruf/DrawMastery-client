import { useLoaderData } from "react-router-dom";

function ViewDetails() {
  const loadedArt = useLoaderData();
  console.log(loadedArt);
  return (
    <div>
      <h2>{loadedArt._id}</h2>
    </div>
  );
}

export default ViewDetails;

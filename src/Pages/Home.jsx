import { useLoaderData } from "react-router-dom";
import Collections from "../components/Collections";
import Hero from "../components/Hero";
import ArtCart from "../components/ArtCart";
import ArtCategory from "../components/ArtCategory";

function Home() {
  const loadedArt = useLoaderData();
  const art = loadedArt.slice(0, 6);
  return (
    <div>
      <Hero />
      <Collections />
      <div className=" mt-36">
        <div className="text-center pb-12">
          <h2 className="font-right text-3xl">Popular Paintings</h2>
        </div>
        <div className="grid grid-cols-3 max-w-7xl mx-auto gap-6">
          {art.map((item, index) => (
            <ArtCart key={index} art={item} />
          ))}
        </div>
      </div>
      <ArtCategory />
    </div>
  );
}

export default Home;

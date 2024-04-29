import { useLoaderData } from "react-router-dom";
import Collections from "../components/Collections";
import Hero from "../components/Hero";
import ArtCart from "../components/ArtCart";
import ArtCategory from "../components/ArtCategory";
import Artist from "../components/Artist";
import FAQs from "../components/FAQs";
import { Slide } from "react-awesome-reveal";

function Home() {
  const loadedArt = useLoaderData();
  const art = loadedArt.slice(0, 6);
  return (
    <div>
      <Hero />
      <Collections />
      <div className=" mt-24 lg:mt-36">
        <Slide direction="down">
          <div className="text-center pb-12">
            <h2 className="font-right text-3xl">Popular Paintings</h2>
          </div>
        </Slide>
        <div className="mx-6 lg:mx-3">
          <div  className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  max-w-7xl mx-auto gap-6">
            {art.map((item, index) => (
              <ArtCart key={index} art={item} />
            ))}
          </div>
        </div>
      </div>
      <ArtCategory />
      <Artist />
      <FAQs />
    </div>
  );
}

export default Home;

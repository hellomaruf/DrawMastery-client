import Marquee from "react-fast-marquee";
import artist1 from "../assets/artist1.png";
import artist2 from "../assets/artist2.png";
import artist3 from "../assets/artist3.png";
import artist4 from "../assets/artist4.png";
import { Slide } from "react-awesome-reveal";

function Artist() {
  return (
    <div className="max-w-7xl mx-auto my-10 mt-24 lg:mt-36">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-2 mx-6 lg:mx-3">
          <Slide cascade direction="left" damping={0.1}>
            <p className="text-xl text-[#FF00D3] py-2">Popular Artist</p>
            <h1 className="text-4xl lg:text-5xl font-right">
              Follow & Collect they Art!
            </h1>
            <p className="my-6 text-sm lg:text-base">
              To my mind a picture should be something pleasant, cheerful and
              pretty. There are too many unpleasant things in life as it is,
              without creating still more of them.
            </p>
            <button className="btn bg-gray-900 hover:bg-gray-600 text-white rounded-xl">
              {" "}
              Explore More
            </button>
          </Slide>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Slide direction="right" cascade damping={0.1}>

          <Marquee
            gradient
            gradientWidth={100}
            gradientColor="white"
            pauseOnHover
          >
            <div className="flex ">
              <div className=" border-4 mx-2 flex flex-col  items-center border-gray-900 rounded-2xl p-10">
                <img className="w-28 rounded-full" src={artist1} alt="" />
                <h2 className="text-2xl font-medium pt-3">Ariah Meyer</h2>
                <p>New York</p>
                <div className=" my-6 flex gap-6 justify-between">
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">50+</h2>
                    <p>Artwork</p>
                  </div>
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">10</h2>
                    <p>Exhibitions</p>
                  </div>
                </div>
              </div>
              <div className=" border-4 mx-2 flex flex-col items-center border-gray-900 rounded-2xl p-10">
                <img className="w-28 rounded-full" src={artist2} alt="" />
                <h2 className="text-2xl font-medium pt-3">Reese Deleon</h2>
                <p>New York</p>
                <div className=" my-6 flex gap-6 justify-between">
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">
                      100+
                    </h2>
                    <p>Artwork</p>
                  </div>
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">20</h2>
                    <p>Exhibitions</p>
                  </div>
                </div>
              </div>
              <div className=" border-4 mx-2 flex flex-col items-center border-gray-900 rounded-2xl p-10">
                <img className="w-28 rounded-full" src={artist3} alt="" />
                <h2 className="text-2xl font-medium pt-3">Jeremiah Rivas</h2>
                <p>New York</p>
                <div className=" my-6 flex gap-6 justify-between">
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">60+</h2>
                    <p>Artwork</p>
                  </div>
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">30</h2>
                    <p>Exhibitions</p>
                  </div>
                </div>
              </div>
              <div className=" border-4 mx-2 flex flex-col items-center border-gray-900 rounded-2xl p-10">
                <img className="w-28 rounded-full" src={artist4} alt="" />
                <h2 className="text-2xl font-medium pt-3">Camille Branch</h2>
                <p>New York</p>
                <div className=" my-6 flex gap-6 justify-between">
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">80+</h2>
                    <p>Artwork</p>
                  </div>
                  <div className="">
                    <h2 className="text-4xl text-[#FF00D3] font-medium">20</h2>
                    <p>Exhibitions</p>
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Artist;

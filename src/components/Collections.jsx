import Marquee from "react-fast-marquee";
import collImg from "../assets/coll.png";
import collImg1 from "../assets/coll1.png";
import collImg2 from "../assets/coll2.png";
import collImg4 from "../assets/coll8.png";
import collImg5 from "../assets/coll5.png";
import collImg6 from "../assets/coll6.png";
import collImg7 from "../assets/coll7.png";
import collImg8 from "../assets/coll9.png";
import { Slide } from "react-awesome-reveal";
// import { Slide } from "react-awesome-reveal";

function Collections() {
  return (
    <div className="my-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center pb-8"
      >
        <h2 className="font-right text-3xl">Painting Collections</h2>
      </div>

      <Slide direction="right" cascade>
        <Marquee
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="500"
          gradient
          gradientWidth={100}
          gradientColor="white"
          className=""
        >
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg} alt="" />
            <h3 className="text-lg md:text-xl font-medium">
              Landscape Painting
            </h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg1} alt="" />
            <h3 className="text-lg md:text-xl font-medium">Cartoon Drawing</h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg2} alt="" />
            <h3 className="text-lg md:text-xl font-medium">
              Charcoal Sketching
            </h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg8} alt="" />
            <h3 className="text-lg md:text-xl font-medium">
              Watercolour Painting
            </h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg4} alt="" />
            <h3 className="text-lg md:text-xl font-medium">Portrait Drawing</h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg5} alt="" />
            <h3 className="text-lg md:text-xl font-medium">
              Landscape Painting
            </h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg6} alt="" />
            <h3 className="text-lg md:text-xl font-medium">Portrait Drawing</h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg7} alt="" />
            <h3 className="text-lg md:text-xl font-medium">Cartoon Drawing</h3>
          </div>
          <div
            className="flex items-center gap-3 border rounded-full border-gray-900 mx-2 p-2
      "
          >
            <img className="w-10 md:w-12" src={collImg8} alt="" />
            <h3 className="text-lg md:text-xl font-medium">Oil Painting</h3>
          </div>
        </Marquee>
      </Slide>
    </div>
  );
}

export default Collections;

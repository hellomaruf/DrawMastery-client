import cateImg1 from "../assets/category1.png";
import cateImg2 from "../assets/category3.png";
import cateImg3 from "../assets/category2.png";
import cateImg4 from "../assets/category4.png";
import cateImg5 from "../assets/category6.png";
import cateImg6 from "../assets/category5.png";

function ArtCategory() {
  return (
    <div className="max-w-7xl mx-auto my-4 mt-36">
      <div className="text-center pb-12">
        <h2 className="font-right text-3xl">Paintings Category</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900 z-0"
            src={cateImg1}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Portrait Drawing
          </h2>
        </div>
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900"
            src={cateImg2}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Cartoon Drawing
          </h2>
        </div>
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900"
            src={cateImg3}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Watercolour Painting
          </h2>
        </div>
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900"
            src={cateImg4}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Oil Painting
          </h2>
        </div>
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900"
            src={cateImg5}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Charcoal Sketching:
          </h2>
        </div>
        <div className="relative">
          <img
            className="rounded-xl border-4 border-gray-900"
            src={cateImg6}
            alt=""
          />
          <h2 className="absolute bottom-3 font-semibold text-white z-10 text-2xl left-4">
            Landscape Painting
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ArtCategory;

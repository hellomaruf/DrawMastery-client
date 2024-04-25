import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.png";
import heroImg3 from "../assets/heroImg3.png";
import heroImg4 from "../assets/heroImg4.png";
function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="col-span-1 space-y-8">
          <h2 className="text-5xl font-medium font-right ">
            In DrawMastery, there are no mistakes, only new discoveries and
            unique creations
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            porro sed perspiciatis, impedit veritatis rem possimus cupiditate
            voluptates error unde.
          </p>
          <div className="">
            <button className="btn">Explore</button>
          </div>
        </div>
        <div className="col-span-1">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img src={heroImg1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={heroImg2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={heroImg3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={heroImg4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;

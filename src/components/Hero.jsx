import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.png";
import heroImg3 from "../assets/heroImg3.png";
import heroImg4 from "../assets/heroImg4.png";
import { Fade, Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-6 my-10 lg:mx-3 items-center justify-between">
        <div className="col-span-1 space-y-8 text-center md:text-left my-8 lg:my-0">
          <Slide cascade damping={0.1}>
            <h2 className="text-4xl lg:text-5xl font-medium font-right ">
              In DrawMastery, there are no mistakes, only new discoveries and
              unique creations
            </h2>
            <p className="text-base">
              Creativity is more than just being different. Anybody can plan
              weird; that’s easy. What’s hard is to be as simple as Bach. Making
              the simple, awesomely simple, that’s creativity
            </p>
            <div className="">
              <button className="btn bg-gray-900 hover:bg-gray-600 text-white ">
                Explore
              </button>
            </div>
            <Fade cascade></Fade>

            <div className="stats shadow">
              <div className="hidden lg:flex ">
                <div className="stat">
                  <div className="stat-figure text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Total Likes</div>
                  <div className="stat-value text-gray-900 text-2xl lg:text-4xl">
                    25.6K
                  </div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary text-2xl lg:text-4xl">
                  2.6M
                </div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </Slide>
        </div>
        <Slide direction="right">
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
        </Slide>
      </div>
    </div>
  );
}

export default Hero;

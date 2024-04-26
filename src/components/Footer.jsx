import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="pt-10">
      {/* <div className="mx-10 md:mx-0">
          <div
            style={{
              backgroundImage: "url(/assets/map.png)",
            }}
            className="relative z-0  -bottom-16 rounded-2xl max-w-5xl mx-auto bg-cover p-4 text-center bg-white  border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Subscribe to get latest updates from us
            </h5>
            <p className="mb-5 text-sm md:text-base text-gray-200 max-w-xl mx-auto ">
              Unlock Your Dream Home: Where Every Property Tells a Unique Story of
              Possibilities and Potential.
            </p>
            <div className="">
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="">
                  <div className="max-w-2xl relative mx-auto">
                    <input
                      type="search"
                      id="search"
                      className="block  w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 outline-none dark:placeholder-gray-400 dark:text-white "
                      placeholder="Email Address"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2 bg-[#F6891F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 0 "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}

      <div className="bg-gray-950 z-10">
        <footer className="footer p-10 py-24 text-base-content max-w-7xl mx-auto">
          <aside className="max-w-sm">
            <div className="flex gap-2">
              <img
                className="w-10 border-2 border-white rounded-full"
                src={logo}
                alt=""
              />
              <a className="text-2xl font-extrabold text-white">
                Draw<span className="font-light">Mastery</span>
              </a>
            </div>
            <p className="py-6 text-gray-100">
              Welcome to the Metro Plaza Hub of Your Future Home: Where Every
              Property Awaits to Narrate Its Tale of Unparalleled Elegance and
              Comfort, Guiding You to Your Perfect Haven.
            </p>
            <div className="">
              <i className=" text-2xl text-white pr-3 ri-facebook-box-fill"></i>
              <i className=" text-2xl text-white pr-3 ri-twitter-x-line"></i>
              <i className=" text-2xl text-white pr-3 ri-instagram-fill"></i>
              <i className=" text-2xl text-white pr-3 ri-linkedin-box-fill"></i>
            </div>
          </aside>
          <nav className="space-y-2">
            <h6 className="font-medium text-lg text-white">Services</h6>
            <a className="link link-hover text-gray-400">Branding</a>
            <a className="link link-hover text-gray-400">Design</a>
            <a className="link link-hover text-gray-400">Marketing</a>
            <a className="link link-hover text-gray-400">Advertisement</a>
          </nav>
          <nav className="space-y-2">
            <h6 className="font-medium text-lg text-white">Company</h6>
            <a className="link link-hover text-gray-400">About us</a>
            <a className="link link-hover text-gray-400">Contact</a>
            <a className="link link-hover text-gray-400">Jobs</a>
            <a className="link link-hover text-gray-400">Press kit</a>
          </nav>
          <nav className="space-y-2">
            <h6 className="font-medium text-lg text-white">Legal</h6>
            <a className="link link-hover text-gray-400">Terms of use</a>
            <a className="link link-hover text-gray-400">Privacy policy</a>
            <a className="link link-hover text-gray-400">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="pt-10">
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
              Intuition is the key to everything, in painting, filmmaking,
              business - everything. I think you could have an intellectual
              ability, but if you can sharpen your intuition, which they say is
              emotion and intellect joining together, then a knowingness occurs.
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

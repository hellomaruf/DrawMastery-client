import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/log1.jpg";
import google from "../assets/google.png";
import github from "../assets/github.png";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Login Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
          confirmButtonColor: "#111827",
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Login Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
          confirmButtonColor: "#111827",
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Login Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Cool",
          confirmButtonColor: "#111827",
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-12 my-20  ">
        <div className="col-span-1">
          <div data-aos="fade-left" data-aos-duration="900" className="">
            <div className=" space-y-2 text-center">
              <h2 className=" text-2xl lg:text-3xl font-right">
                Login to your Account
              </h2>
              <p>Welcome back select mathod to Login</p>
            </div>

            <form
              onSubmit={handleLogin}
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" col-span-1  mt-2 "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <p
                    className="cursor-pointer absolute top-3 right-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="ri-eye-line"></i>
                    ) : (
                      <i className="ri-eye-off-line"></i>
                    )}
                  </p>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-900 hover:bg-gray-700 text-white">
                  Login
                </button>
              </div>
              <div className="text-center pt-2">
                <p>
                  {" "}
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-gray-900 font-bold">
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
            <div className="divider py-3">OR</div>
            <div className=" mt-4 flex flex-col gap-4 text-center ">
              <button onClick={handleGoogleLogin} className="btn">
                <img className="w-6" src={google} alt="" /> Sign in with Google
              </button>
              <button onClick={handleGithubLogin} className="btn">
                <img className="w-6" src={github} alt="" />
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img className="h-full" src={img} alt="" />
          <div className="absolute bottom-4 left-4 space-y-3">
            <div className="flex gap-2 ">
              <img
                className="w-10 border-2 border-white rounded-full"
                src={logo}
                alt=""
              />
              <a className="text-2xl  text-white ">
                Draw<span className="font-light">Mastery</span>
              </a>
            </div>
            <p className="text-gray-300 max-w-sm text-sm font-thin ">
              If you could say it in words, there would be no reason to paint
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

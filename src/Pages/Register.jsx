import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/log1.jpg";
import logo from "../assets/logo.png";
import { AuthContext } from "../Services/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (!/^.{6,}$/g.test(password)) {
      setPassError("Password must be at least 6 character");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/g.test(password)) {
      setPassError(
        "Password should contain at least uppercase and lowercase letters"
      );
      return;
    }
    setPassError("");
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(name, photo)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: "Register Successfully",
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
                Register to your Account
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
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
                <small className="text-red-600 py-1">{passError}</small>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-900 hover:bg-gray-700 text-white">
                  Register
                </button>
              </div>
              <div className="text-center pt-2">
                <p>
                  {" "}
                  Already have an account?{" "}
                  <Link to="/login" className="text-gray-900 font-bold">
                    Please Login
                  </Link>
                </p>
              </div>
            </form>
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

export default Register;

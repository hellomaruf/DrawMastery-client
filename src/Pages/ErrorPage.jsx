import { Link } from "react-router-dom";
import errorImg from "../assets/errorPage.png";


function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-2">
        <div className="max-w-sm">
          <img src={errorImg} alt="" />
        </div>
        <h3 className="font-semibold text-3xl">Opps Page Not Found</h3>
        <p>Sorry The Page you are looking for doesn,t exist</p>
        <div className="pt-4">
          <Link
            to="/"
            className="btn bg-gray-900 rounded-full hover:bg-gray-700 text-white"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

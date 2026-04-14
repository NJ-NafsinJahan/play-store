import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/images/App-Error.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* <h1 className="text-6xl font-bold">404</h1> */}
      <img src={errorImg} alt="" />
      <p className="text-xl mt-4"> 404 Error: Page Not Found</p>

      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

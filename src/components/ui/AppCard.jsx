import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100w-full sm:w-80 md:w-96 shadow-md gap-3 mx-auto ">
      <figure>
        <img
          src={app.image}
          alt={app.title}
          className="h-20 w-auto  sm:h-52 md:h-56 overflow-hidden"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {app.title}</h2>
        <div className=" flex justify-between items-center ">
          <span className="flex items-center gap-4 bg-green-100 text-green-600 text-4 p-2 font-semibold rounded-md ">
            <FaDownload /> {app.downloads}
          </span>
          <span className=" flex items-center gap-4 bg-amber-100 text-amber-600 text-6 py-1 px-3 font-semibold rounded-md  ">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;

import React, { use, useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import AppCard from "../ui/AppCard";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());
// console.log(appsPromise, "apps Promise");

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps, "Apps");

  // ** data fetching by using useEffect. **
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 3500);
    };
    fetchData();
  }, []);
  console.log(apps, "apps");
  console.log(loading, "Page Loading");

  return (
    <div className=" container mx-auto my-20">
      {/* Section Header */}
      <div className=" text-center my-9">
        <h2 className=" font-bold text-5xl my-6">Trending Apps</h2>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>

      {/* Section for Apps */}
      <div>
        {" "}
        {/* Total Apps: {apps.length} */}
        {loading ? (
          <div className="flex justify-center items-center text-4xl">
            {" "}
            <ClockLoader color="#ad47ff" />
          </div>
        ) : (
          <div className=" grid grid-cols-3 gap-5">
            {apps.slice(0, 6).map((app, ind) => {
              return <AppCard app={app} key={ind} />;
            })}
          </div>
        )}
      </div>

      <div className=" flex justify-center items-center">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-amber-50 mt-6 flex justify-center items-center">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;

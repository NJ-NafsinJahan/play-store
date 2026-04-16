import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";
import AppCard from "../../components/ui/AppCard";

const Apps = () => {
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
      }, 1000);
    };
    fetchData();
  }, []);
  console.log(apps, "apps");
  console.log(loading, "Page Loading");

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center flex-col items-center my-10">
          <h1 className="text-4xl text-purple-500 font-bold my-2"> All Apps</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>{" "}
        {/* Total Apps: {apps.length} */}
        {loading ? (
          <div className="flex justify-center items-center text-4xl">
            {" "}
            <ClockLoader color="#ad47ff" />
          </div>
        ) : (
          <div className=" grid grid-cols-3 gap-5">
            {apps.map((app, ind) => {
              return <AppCard app={app} key={ind} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;

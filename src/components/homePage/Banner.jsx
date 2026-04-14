import React from "react";
import bannerImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] text-center space-y-5 pt-12.5">
      <h1 className="font-bold text-5xl ">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h1>
      <p className="text-gray-600 max-w-[50%] mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className=" flex items-center justify-center gap-4">
        <button className="btn">Play Store</button>
        <button className="btn">App Store</button>
      </div>
      <img src={bannerImg} alt="" className="mx-auto " />
    </div>
  );
};

export default Banner;

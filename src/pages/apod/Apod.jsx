import React, { useState } from "react";
import topographySVG from "../../assets/topography.svg";
import { useEffect } from "react";

const Apod = () => {
  const svgBackground = {
    backgroundImage: `url(${topographySVG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const NASA_API_KEY = import.meta.env.VITE_APP_NASA_APIKEY;

  const [apodData, setApodData] = useState();
  const fetchData = async () => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setApodData(data);
      console.log(data);
    } catch (error) {
      console.error("err = ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative bg-[#111111] top-0 z-0 flex flex-1 lg:left-64 lg:mr-64">
      <main
        className="relative z-0 flex-1 text-white lg:block container"
        style={svgBackground}
      >
        <div className="min-h-screen">
          <div className="container p-4 pt-20 mx-auto sm:px-8 lg:pt-10">
            <div className="grid lg:grid-cols-2 lg:gap-4">
              {apodData && (
                <>
                  <div className="relative h-[50vh] rounded-lg mb-4 lg:mb-0 lg:h-auto focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400">
                    <div className="hidden lg:sticky lg:block lg:top-10">
                      <a
                        target="_blank"
                        href={apodData.hdurl}
                        className="rounded-lg focus:ring-0 focus:ring-offset-0 focus:ring-transparent"
                      >
                        <img
                          src={apodData.url}
                          alt={apodData.title}
                          className=" rounded-lg"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="p-4 bg-black rounded-b-lg sm:p-8 lg:rounded-lg">
                    <p className="pt-2 text-primary lg:pt-0">{apodData.date}</p>
                    <h1 className="py-2 text-4xl font-medium text-gray-200 glow">
                      {apodData.title}
                    </h1>
                    <h2 className="text-lg text-gray-400">
                      Credit: {apodData.copyright}
                    </h2>
                    <p className="pt-2 text-xl leading-relaxed text-gray-300">
                      {apodData.explanation}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apod;

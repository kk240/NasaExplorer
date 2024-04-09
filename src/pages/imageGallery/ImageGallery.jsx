import React, { useEffect, useState } from "react";
import topographySVG from "../../assets/topography.svg";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const ImageGallery = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [images, setImages] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  const NASA_API_KEY = import.meta.env.VITE_APP_NASA_APIKEY;

  const handleSearch = (e) => {
    fetchImages();
  };

  const svgBackground = {
    backgroundImage: `url(${topographySVG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const fetchImages = async () => {
    const nasaUrl = `https://images-api.nasa.gov/search/?q=${searchQuery}`;

    try {
      fetch(nasaUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Process the response data here
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative bg-[#111111] top-0 z-0 flex flex-1 lg:left-64 lg:mr-64">
      <main
        className="relative z-0 flex-1 text-white lg:block container"
        style={svgBackground}
      >
        <div className="container grid gap-12 pt-20 min-h-screen px-5 pb-12 mx-auto  lg:pt-10">
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="fixed left-0 z-10 flex flex-shrink-0 w-full h-16 mr-64 bg-black border-b border-gray-900 lg:right-0 lg:left-64 top-16 lg:top-0">
              <div className="flex justify-between flex-1 px-4">
                <div className="flex flex-1">
                  <form className="flex w-full lg:ml-0" onSubmit={handleSearch}>
                    <div className="relative w-full text-gray-300 lg:right-0 focus-within:text-gray-100">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <FaSearch />
                      </div>
                      <input
                        type="text"
                        className="block w-full h-full py-2 pl-8 pr-3 text-gray-300 bg-black border-transparent focus:outline-none focus:text-gray-100 focus:ring-0 focus:border-transparent sm:text-sm"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          console.log(searchQuery);
                        }}
                      />
                    </div>
                    <div className="flex items-center ml-4 lg:ml-6 lg:mr-64">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-dark"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageGallery;

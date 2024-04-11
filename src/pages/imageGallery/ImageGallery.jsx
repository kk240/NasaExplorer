import React, { useEffect, useState } from "react";
import topographySVG from "../../assets/topography.svg";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Card from "../../components/card/Card";
import axios from "axios";

const ImageGallery = () => {
  const { searchQuery, setSearchQuery, images, setImages } =
    useContext(DataContext);
  const onType = (e) => {
    setSearchQuery(e.target.value);
    // fetchImages();
    // const search = e.target.value;
    // const nasaUrl = `https://images-api.nasa.gov/search?q=${search}&media_type=image`;
    // const res = await axios.get(nasaUrl);
    // console.log(res.data);
  };
  const fetchNewData = async (e) => {
    e.preventDefault();
    const nasaUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;
    const res = await axios.get(nasaUrl);
    // debugger;
    setImages(res.data.collection.items);
  };
  console.log(images);
  // const fetchImages = async () => {
  //   const nasaUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;

  //   try {
  //     fetch(nasaUrl)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setImages(data.collection.items);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const svgBackground = {
    backgroundImage: `url(${topographySVG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
                  <form className="flex w-full lg:ml-0" onSubmit={fetchNewData}>
                    <div className="relative w-full text-gray-300 lg:right-0 focus-within:text-gray-100">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <FaSearch />
                      </div>
                      <input
                        type="text"
                        className="block w-full h-full py-2 pl-8 pr-3 text-gray-300 bg-black border-transparent focus:outline-none focus:text-gray-100 focus:ring-0 focus:border-transparent sm:text-sm"
                        value={searchQuery}
                        onChange={onType}
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
            <div className="relative flex-1 overflow-y-auto focus:outline-none">
              <div className="px-4 pt-40 pb-6 mx-auto lg:pt-20 xl:pb-8 max-w-screen-2xl">
                <ul className="relative grid flex-1 grid-cols-1 gap-6 p-1 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                  {images?.map((image, index) => {
                    return <Card imageData={image} key={index} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageGallery;

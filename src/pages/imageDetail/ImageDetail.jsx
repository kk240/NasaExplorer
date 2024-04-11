import React, { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import topographySVG from "../../assets/topography.svg";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";

const ImageDetail = () => {
  const svgBackground = {
    backgroundImage: `url(${topographySVG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const [img, setImg] = useState([]);
  let { nasa_id } = useParams();
  const { images } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);
  let imagesData = images;

  console.log(filteredData);
  console.log(images);
  //   let { nasa_id } = useParams();
  //   const { images } = useContext(DataContext);
  //   const [filteredData, setFilteredData] = useState([]);
  //   const currentItemData = images.filter((image) => {
  //     return image.data[0].nasa_id == nasa_id;
  //   });
  //   setFilteredData(currentItemData);
  //   console.log(filteredData);
  const fetchMultipleImages = () => {
    fetch(`https://images-api.nasa.gov/asset/${nasa_id}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data
        console.log(data);
        setImg(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching image details:", error);
      });
  };

  useEffect(() => {
    const currentItemData = imagesData.filter((image) => {
      return image.data[0].nasa_id === nasa_id;
    });
    setFilteredData(currentItemData);

    fetchMultipleImages();
  }, [images]);

  return (
    <div className="relative bg-[#111111] top-0 z-0 flex flex-1 lg:left-64 lg:mr-64">
      <main
        className="relative z-0 flex-1 text-white lg:block container"
        style={svgBackground}
      >
        <div className="min-h-screen">
          <div className="container p-4 pt-20 mx-auto sm:px-8 lg:pt-10">
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <div className="relative h-[50vh] rounded-lg mb-4 lg:mb-0 lg:h-auto focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400">
                <div className="hidden lg:sticky lg:block lg:top-10">
                  <div
                    // href={img ? img.collection?.items[0]?.href : "#"}
                    className="rounded-lg focus:ring-0 focus:ring-offset-0 focus:ring-transparent"
                  >
                    <img
                      src={filteredData[0]?.links[0].href}
                      alt={filteredData[0]?.data[0].title}
                      className=" rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 overflow-hidden bg-black lg:bg-transparent lg:pt-0 ">
                <div>
                  <p className="text-2xl font-bold">
                    {filteredData[0]?.data[0].title}
                  </p>
                </div>
                <div>
                  <p className="py-2 font-light text-gray-500">
                    {" "}
                    {dayjs(filteredData[0]?.data[0].date_created).format(
                      "YYYY-MM-DD"
                    )}
                  </p>
                </div>
                <hr className="pt-1 pb-2 border-gray-900" />

                <div className="py-4">
                  <div>
                    <p className="inline text-lg text-gray-400">
                      Secondary Creator:{" "}
                    </p>
                    <p className="inline">
                      {filteredData[0]?.data[0].secondary_creator}
                    </p>
                  </div>
                </div>
                <div className="pb-4">
                  <div>
                    <p className="inline text-lg text-gray-400">NASA ID: </p>
                    <p className="inline">{filteredData[0]?.data[0].nasa_id}</p>
                  </div>
                </div>
                <div className="pb-4">
                  <div>
                    <p className="inline text-lg text-gray-400">Center: </p>
                    <p className="inline">{filteredData[0]?.data[0].center}</p>
                  </div>
                </div>

                <hr className="pt-1 pb-2 border-gray-900" />
                <div>
                  <p className="text-lg leading-loose">
                    {filteredData[0]?.data[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageDetail;

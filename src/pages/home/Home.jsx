import React from "react";
import topographySVG from "../../assets/topography.svg";
import Galaxy from "../../assets/M81.webp";

const Home = () => {
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
          {/* <header className="grid col-span-2">
            <span className="hidden">
              <img
                src={Galaxy}
                alt=""
                className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              />
            </span>
            <div className="flex-col justify-center mt-4 text-center lg:text-left lg:row-start-1 lg:flex lg:mt-0 xl:items-center">
              <div>
                <h1 className="text-4xl font-bold glow sm:text-5xl 2xl:text-6xl">
                  {" "}
                  Explore Nasa Imagery Data
                </h1>
              </div>
            </div>
          </header> */}
          <header className="grid lg:grid-cols-2 md:max-w-2xl lg:max-w-max">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src={Galaxy}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                  }}
                />
              </span>
              <img
                alt="M81 Galaxy"
                src={Galaxy}
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
            </span>
            <div className="flex-col justify-center mt-4 text-center lg:text-left lg:row-start-1 lg:flex lg:mt-0 xl:items-center">
              <div>
                <h1 className="text-4xl font-bold glow sm:text-5xl 2xl:text-6xl">
                  Explore NASA Imagery and Data
                </h1>
                <h2 className="mt-2 text-2xl font-light text-white text-opacity-75 lg:mt-4 sm:mt-6 sm:text-3xl 2xl:text-4xl">
                  A free and open source project, built with REST APIs from{" "}
                  <a
                    href="https://api.nasa.gov"
                    className="rounded-md lg:hover:underline text-primary-light"
                  >
                    api.nasa.gov
                  </a>
                </h2>
                <div className="sm:flex sm:mt-4 xl:mt-8 sm:text-lg 2xl:text-xl">
                  <a
                    className="block px-4 py-2 mt-4 text-center rounded bg-primary sm:w-full"
                    href="/images?q=Supernova"
                  >
                    START EXPLORING
                  </a>
                  <a
                    className="flex items-center justify-center px-4 py-2 mt-4 border rounded border-primary text-primary-light sm:ml-4 sm:w-full"
                    href="/#about-app"
                  >
                    FEATURES
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </main>
    </div>
  );
};

export default Home;

import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("supernova");
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const nasaUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;

    try {
      fetch(nasaUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setImages(data.collection.items);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <DataContext.Provider
      value={{ searchQuery, setSearchQuery, images, setImages }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

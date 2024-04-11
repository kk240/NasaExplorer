import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Apod from "./pages/apod/Apod";
import ImageGallery from "./pages/imageGallery/ImageGallery";
import { DataProvider } from "./context/DataContext";
import ImageDetail from "./pages/imageDetail/ImageDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="images" element={<ImageGallery />} />
          <Route path="images/:nasa_id" element={<ImageDetail />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

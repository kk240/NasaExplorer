import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Apod from "./pages/apod/Apod";
import ImageGallery from "./pages/imageGallery/ImageGallery";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="images" element={<ImageGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

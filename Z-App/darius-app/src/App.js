import './App.css';

import {
  createContext,
  useEffect,
  useState,
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { getPhotos } from './Apis/getPhotos';
import AboutUs from './Components/AboutUs/AboutUs';
import Content from './Components/Content/Content';
import Counter from './Components/Counter/Counter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/Home/HomePage';

export const ImageContext = createContext([]);

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getPhotos();
      setImages(data);
    };
    fetchPhotos();
  }, []);

  return (
    <ImageContext.Provider value={{ images }}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/content"
              element={<Content title={'Tierra del Fuego'} />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ImageContext.Provider>
  );
}

export default App;

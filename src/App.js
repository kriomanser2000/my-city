import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CityInfo from './components/CityInfo';
import MainAttraction from './components/MainAttraction';
import OtherAttractions from './components/OtherAttractions';
import Photos from './components/Photos';
const App = () => 
{
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/city-info">Інформація про місто</Link></li>
          <li><Link to="/main-attraction">Найвідоміша пам'ятка</Link></li>
          <li><Link to="/other-attractions">Інші пам'ятки</Link></li>
          <li><Link to="/photos">Фотографії міста</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-info" element={<CityInfo />} />
        <Route path="/main-attraction" element={<MainAttraction />} />
        <Route path="/other-attractions" element={<OtherAttractions />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
};
export default App;
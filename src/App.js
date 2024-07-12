import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city-info" component={CityInfo} />
        <Route path="/main-attraction" component={MainAttraction} />
        <Route path="/other-attractions" component={OtherAttractions} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </div>
  );
};
export default App;
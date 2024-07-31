import Heading from './Component/Heading/Heading';
import Search from './Component/Search/Search';
import Container from './Component/Container/Container';
import NoSearch from './Component/Container/NoSearch/NoSearch';

import './App.css';
import { useRef, useState } from 'react';


function App() {
  const [location, setLocation] = useState({})
  
  return (
    <div className="App">
      <Heading/>
      <Search 
          setLocation = {setLocation} 
      />
      {location.lat&&<Container lat = {location.lat} lon = {location.lon}/>}
      {!location.lat&&<NoSearch/>}
    </div>
  );
}

export default App;

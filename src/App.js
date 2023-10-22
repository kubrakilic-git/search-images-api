import './App.css';
import 'bulma/css/bulma.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './ImageList';


function App() {
  //images ile aranan resimleri listeleyecez
  const [images, setImages] = useState([])
  const searchSubmit = async (valinput)=>{
      const result = await searchImages(valinput);
      setImages(result);
  }  

  return ( 
    <div className="App">
          <SearchHeader onSearch={searchSubmit}></SearchHeader>
          <ImageList imagesurl={images}></ImageList>
    </div>
  );
}

export default App;

import searchImages from './Api';
import './App.css';
import ImageList from './components/ImageList'
import Searchbar from './components/SearchBar'
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([])
  const onSubmitResultsToImages = async(term) => {
    const result = await searchImages(term);

    setImages(result)
  }

  return (
    <div> App
        <Searchbar onSubmit={onSubmitResultsToImages}/>
        <ImageList images={images} />
    </div>
  )
}

export default App;

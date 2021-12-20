import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');
  const REACT_APP_PIXABAY_API_KEY = '16136652-c172bf7c353aa5a77e7afa0cc';

  //*fetching data using axios and useEffect
  const hook = () => {
    const eventHandler = (responses) => {
      console.log(responses.data.hits);
      setImages(responses.data.hits);
      setLoading(false);
    };
    const promise = axios.get(
      `https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    );
    promise.then(eventHandler);
  };
  useEffect(hook, [term]);

  //*searching menggunakan searchbar

  return (
    <div >
      <div className='px-10 bg-gradient-to-b from-indigo-300 to-indigo-100'>
        <SearchBar setTerm={(text) => setTerm(text)} />
        {!isLoading && images.length == 0 && <p>images not found</p>}
        {isLoading ? (
          <p className='font-bold text-xl text-center'>Loading</p>
        ) : (
          <div className='grid grid-cols-3 justify-items-center gap-y-4'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

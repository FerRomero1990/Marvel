import { useState, useEffect } from 'react';
import axios from 'axios';
import { Comic } from './components/Comic/Comic';
import { Layout } from './components/Layout/Layout';
import './App.css';
import Nav from './components/Nav/Nav';

function App() {
  const [comics, setComics] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (addedComic) => {
    setFavorites([...favorites, addedComic]);
  };

  useEffect(() => {
    axios
      .get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=31c4e681831ac058689695f8eafa61e4&hash=398fd4b79f161f31334fab4fa30d45d0')
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <div>
        <Nav/>
        <button className='btn-favorite-comics' onClick={openModal}>Favoritos</button>
      <div>
        {favorites.map((fav) => (
          <Layout key={fav.id} comic={fav} favorites={fav.title} modalStatus={modalVisible} />
        ))}
      </div>

      <div>
        {comics.map((com) =>
          com.description !== null &&
          com.description !== '' &&
          !com.thumbnail.path.includes('image_not_available') &&
          com.description !== '#N/A' ? (
            <Comic
              key={com.id}
              comic={com}
              nombreComic={com.title}
              imagen={`${com.thumbnail.path}.${com.thumbnail.extension}`}
              descripcion={com.description}
              favorite={'Añadir a Favoritos'}
              favoriteComic={() => addToFavorite(com)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;

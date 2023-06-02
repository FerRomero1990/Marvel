import './Comic.css';

// eslint-disable-next-line react/prop-types
function Comic({ nombreComic, imagen, descripcion, favorite, favoriteComic }) {

  const listComic = () => {
    favoriteComic()
  };

  return(
    <div className='comic-card'>
      <section className='comic-container'>
        <h1 className='comic-name'>{nombreComic}</h1>
          <div className='comic-info'>
            <div className='img-container'>
              <img src={imagen} alt='comic-front-page' className='comic-img'/>
            </div>
            <p className='comic-description'>{descripcion}</p>
            </div>
              <button className='add-favorite' onClick={listComic}>{favorite}</button>
      </section>
    </div>
  )
}

export { Comic };
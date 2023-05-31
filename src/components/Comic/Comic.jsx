import './Comic.css';

// eslint-disable-next-line react/prop-types
function Comic({ nombreComic, imagen, descripcion, favorite }) {

  return(
    <section className='comic-container'>
      <h1 className='comic-name'>{nombreComic}</h1>
        <div className='comic-info'>
          <img src={imagen} alt='comic-front-page' className='comic-img'/>
          <p className='comic-description'>{descripcion}</p>
          </div>
            <h4 className='add-favorite'>{favorite}</h4>
    </section>
  )
}

export { Comic };
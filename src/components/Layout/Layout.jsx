import './Layout.css';

// eslint-disable-next-line react/prop-types
function Layout() {

  return(
    <>
        <div className='layout-nav'>
          <img src='https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/07/marvelstudios-7611c.jpg?resize=747%2C388' alt='Marvel Logo' className='img-logo'/>
          <button className='btn-favorite-comics'>Favoritos</button>
        </div>
    </>
  )
}

export { Layout };
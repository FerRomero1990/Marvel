// import { useState } from 'react';
import './Layout.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ favorites, modalStatus }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const openModal = () => {
  //   setModalVisible(true);
  // }

return(
  <div className='layout-nav'>
    {/* <img src='https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/07/marvelstudios-7611c.jpg?resize=747%2C388' alt='Marvel Logo' className='img-logo'/>
    <button className='btn-favorite-comics' onClick={openModal}>Favoritos</button> */}

    {modalStatus && (
        <div className='modal'>
        <div className='modal-content'>
          <h2>Tus comics favoritos</h2>
          <p className='favorites-title'>{favorites}</p>
          {/* <button onClick={openModal()}>Cerrar</button> */}
        </div>
      </div>
    )}
  </div>
);
};

export { Layout };
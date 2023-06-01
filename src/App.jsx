import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { Comic } from './components/Comic/Comic'
import { Layout } from './components/Layout/Layout'

function App() {

  const [comics, setComics]=useState([])

  useEffect(() =>{
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=31c4e681831ac058689695f8eafa61e4&hash=398fd4b79f161f31334fab4fa30d45d0')
    .then(res=>{
      setComics(res.data.data.results)
    })
    .catch(error=>console.log(error))
  },[])

  console.log(comics)
  
  return (
    <div>
      <h1>Vamos a Lograrlo</h1>
      <Layout/>

      { comics.map(com=> (
        <Comic
        key={com.id}
        comic={com}
        nombreComic={com.title}
        imagen={`${com.thumbnail.path}.${com.thumbnail.extension}`}
        descripcion={com.description}
        favorite={'Añadir a Favoritos'}/>
      ) )
        
      }
    </div>
  )
}

export default App

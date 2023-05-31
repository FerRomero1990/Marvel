import './App.css'
import { Comic } from './components/Comic/Comic'


function App() {
  
// useEffect(() => {
//   fetch("https://dummyjson.com/products?limit=100")
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data.products);
//       setFilteredProducts(data.products);
//     });
// }, []);
  return (
    <div>
      <h1>Vamos a Lograrlo</h1>
        <Comic
       nombreComic="Daredevil & Echo"
       imagen="https://cdn.marvel.com/u/prod/marvel/i/mg/c/e0/646b6a7d57faf/clean.jpg"
       descripcion="Descripción del comic"
       favorite="Va el check"
        />
    </div>
  )
}

export default App

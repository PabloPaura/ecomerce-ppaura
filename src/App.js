
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos a nuestra tienda'} />
    <ItemDetailContainer />
    </>

  );
}

export default App;

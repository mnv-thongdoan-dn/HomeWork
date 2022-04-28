import '../src/assets/scss/styles.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import {HomePage, ProductList, AboutUs} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
}

export default App;

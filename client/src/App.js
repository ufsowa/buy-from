import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
// import ProductList from './components/views/ProductList/ProductList';
// import ProductPage from './components/views/ProductPage/ProductPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={'/'} element={<Homepage/>} />
        {/* <Route exact path={'/shop/:categoryId'} component={ProductList} /> */}
        {/* <Route exact path={'/product/:productId'} component={ProductPage} /> */}
      </Routes>
  </MainLayout>
  );
}

export default App;

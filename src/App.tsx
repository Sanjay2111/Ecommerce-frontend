import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm.tsx';
import ProductList from './components/ProductList.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;

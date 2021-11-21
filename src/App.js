import Home from "./pages/Home";
import Product from "./pages/Product";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  // return <Home/>;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>     
      </Routes>
    </Router>
  )
};

export default App;

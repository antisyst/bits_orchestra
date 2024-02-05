import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Reviews from "./components/Reviews";

function App() {
  return (
    <main className="bg-gray-100">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" index={true} element={<ProductList />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
    </Router>
    </main>
  );
}

export default App;

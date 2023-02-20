import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Genres from "./routes/Genres";
import Search from "./routes/Search";
import Today from "./routes/Today";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/Genres" element={<Genres/>} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
    </Router>
  )
}

export default App;
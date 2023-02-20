import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Genres from "./routes/Genres";
import Search from "./routes/Search";
import Today from "./routes/Today";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/Genres" element={<Genres/>} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
    </Router>
  )
}

export default App;
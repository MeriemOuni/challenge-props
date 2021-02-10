import "./App.css";
import Footer from "./Component/Footer/Footer";
import MovieList from "./Component/MovieList/MovieList";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;

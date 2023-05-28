import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/searchBar/searchFeed/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
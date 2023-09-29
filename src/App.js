import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AlbumsPage from "./components/pages/AlbumsPage";
import PostsPage from "./components/pages/PostsPage";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/albums/:id'} element={<AlbumsPage />} />
                <Route path={'/posts/:id'} element={<PostsPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AlbumsPage from "./components/pages/AlbumsPage";
import PostsPage from "./components/pages/PostsPage";

function App() {

  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/albums/:id'} element={<AlbumsPage />}/>
                <Route path={'/posts/:id'} element={<PostsPage />}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;

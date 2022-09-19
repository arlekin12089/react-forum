import './App.css';
import {Routes, Route} from 'react-router-dom'
import useFetch from './hooks/usePosts';

import Home from "./pages/Home";
import Post from "./pages/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
const allPosts = useFetch();
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home allPosts={allPosts}/>}></Route>
            <Route path="/post/:id" element={<Post/>}/>
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

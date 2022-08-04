import './App.css';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Homepage/Home';
import SinglePost from './components/SinglePost/SinglePost';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/posts/:slug' element={<SinglePost/>} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

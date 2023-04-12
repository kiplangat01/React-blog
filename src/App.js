import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navabar';
import Post from './Post';
import PostDetails from './PostDetail';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/Post'>
      <Post />
      </Route>
      <Route path='/blogs/:id'>
        <PostDetails />
      </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

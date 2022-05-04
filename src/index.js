import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCvAfhVnzexMSpDmLfHxzFjYo7rXy5vqAg';
const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
  );
};


ReactDOM.render(<App />, document.querySelector(('.container')));

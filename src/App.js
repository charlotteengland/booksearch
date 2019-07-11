import React from 'react';
import './App.css';

import Searchbar from './searchBar/searchBar';
import ListOfBooks from './listofBooks/listofbooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      searchTerm: "",
      filter: null
    };
  }



  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <Searchbar />
        <Booklist />
      </div>
    
      );
  }
}

export default App;

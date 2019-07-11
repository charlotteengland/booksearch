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

handleSearch = (searchData) => {
  console.log(searchData)
  this.setState({
    bookList: searchData.items
  })  

}  

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <Searchbar handleSearch = {this.handleSearch}/>
      </div>
    
      );
  }
}

export default App;

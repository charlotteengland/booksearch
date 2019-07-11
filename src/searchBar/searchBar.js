import React, {Component} from 'react';

class Searchbar extends Component {
  
  
  
  handleSubmit(e) {
    e.preventDefault();
    const url = "https://www.googleapis.com/books/v1/volumes?";
    const query = `q= {searchTerm}`
  }



  render() {
    return (
      <div>
        <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
          <div className="darkGray">
            <label htmlFor="search">Search:</label>
            <input
              placeholder="book"
              id="search"
              onChange={e => this.titleChanged(e.target.value)}/>
            <button type="submit" >Search</button>
            </div>
          <label htmlFor="filter">Filter:</label>
          <select name="filter" onChange={e => this.searchBook(e.target.value)}>
            <option value="free">free</option>
            <option value="paid">paid</option>
          </select>

        </form>
      </div>
    )
  }


}

export default Searchbar;
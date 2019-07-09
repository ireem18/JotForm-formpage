import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  state = {
    query: '',
    books: []
  }

  getInfo = () => {
    let filteredBooks = [];
  
    for (let i=0; i<this.props.books.length; i++){
      if( this.props.books[i].title.toLowerCase().indexOf(this.search.value.toLowerCase())!==-1) {
        filteredBooks.push(this.props.books[i]);
      }
    }
    
    console.log(this.props.books, this.search.value)
    this.props.setParentState({books: filteredBooks});
  }

  handleInputChange = (e) => {
    console.log(12, e, this.search.value)
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 0) {
        this.getInfo();
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <div className="Search-Container">
      <div className="main">
      <form>
        <input
        name="bookName"
          type="text"
          className="Search-Input"
          placeholder="Search "
          ref={input => this.search = input}
          onChange={ (e) => {this.handleInputChange(e) } }
        />
        <hr/>
      </form>
      </div>
      </div>
    )
  }
}

export default Search

/*const Search = props => (
  <div className="Search-Container">
    <div className="main">
      <form onSubmit={props.getBook}>
        <input
          name="bookName"
          type="text"
          className="Search-Input"
          placeholder="Search..."
          autoFocus
        />
       
      <hr/>
      </form>
    </div>
  </div>
);

export default Search;

*/

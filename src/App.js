import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import BookPage from './components/BookPage';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
     books: []
    };
  }
  
  getBook = async e => {
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    console.log(bookName, e.target)
    const api_call = await fetch
    (`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Uzdb4AYvpoK7vxbTbTbGH2f8gKL8sQ3i&q`)
    const data = await api_call.json();
    this.setState({ books: data.results.books });
   console.log(this.state.books)
  };
  
  async componentDidMount() {
    const api_call = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Uzdb4AYvpoK7vxbTbTbGH2f8gKL8sQ3i&q=${
        this.state.bookName
      }`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({ books: data.results.books });
  }
  
  render() {
      const { books, searchTerm } = this.state;
    return (
      <>
        <Header />
        <Search books={books} setParentState={this.changeState} />
        <BookPage books={books} />
        <Footer />
      </>
    );
  }

  changeState = (changes) => {
    this.setState(changes);
  }
}
export default App;



/*
componentDidMount() {
    this.getBook();
    handleTerm(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearch(e) {
    e.preventDefault();

    const { searchTerm } = this.state;

   fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Uzdb4AYvpoK7vxbTbTbGH2f8gKL8sQ3i&q=${searchTerm}`
    )
      .then(res => res.json())
      .then(data => this.setState({ books:data.results.books }))
      .catch(err => console.error(err));

    this.setState({ searchTerm: '' });
  }

  /* 
  componentDidMount = () => {
    const json = localStorage.getItem("books");
    const books = JSON.parse(json);
    this.setState({books})
  }
  componentDidUpdate = () => {
    const books = JSON.stringify(this.state.books);
    localStorage.setItem("books",books);
  }
  

  }

*/
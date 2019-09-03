import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Forms from './components/Forms';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
     contents: []
    };
  }
  
  getBook = async e => {
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    const api_call = await fetch
    (`https://api.jotform.com/user/forms?apiKey=0db00cc496eed9b622b66dc269d05d3a`)
    const data = await api_call.json();
    this.setState({ contents: data.content });
    console.log(this.state.contents)
  };
  
  async componentDidMount() {
    const api_call = await fetch(
      `https://api.jotform.com/user/forms?apiKey=0db00cc496eed9b622b66dc269d05d3a`
    );
    const data = await api_call.json();
    this.setState({ contents: data.content });
  }
  
  render() {
      const { contents, searchTerm } = this.state;
    return (
      <>
        <Header />
        <Search contents={contents} setParentState={this.changeState} />
        <Forms contents={contents} />
        <Footer />
      </>
    );
  }

  changeState = (changes) => {
    this.setState(changes);
  }
}
export default App;


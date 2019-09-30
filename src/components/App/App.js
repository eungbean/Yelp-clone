import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';


class App extends React.Component {
  render() {
    return (<div className="App">
      <h1>yelp Clone</h1>
      <SearchBar></SearchBar>
      <BusinessList></BusinessList>
    </div>
    )};
}

export default App ;
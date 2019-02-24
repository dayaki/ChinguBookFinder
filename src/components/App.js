import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Books from "./Books";
import Loading from "../assets/loading.svg";

class App extends Component {
  state = {
    books: [],
    searchTerm: "",
    error: false,
    loading: false
  };

  handleInputChange = e => {
    // if (e.target.value === "") {
    //   this.setState({
    //     error: true,
    //   });
    // }
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    });
  };

  handleSearch = () => {
    const searchInput = this.state.searchTerm;
    if (searchInput.length > 0) {
      this.setState({ loading: true, error: false });
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyBHvufh7ugN1VnK9j5vqROgskKR8FCNSFM&maxResults=30`
      )
        .then(response => response.json())
        .then(data => {
          if (data.totalItems > 0) {
            this.setState({
              books: data.items,
              loading: false
            });
          } else {
            this.setState({
              books: [],
              loading: false
            });
          }
        })
        .catch(err => console.log("error", err));
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="app">
        <h2>Book Finder</h2>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onInputChange={this.handleInputChange}
          onCancelButton={() => this.setState({ searchTerm: "", books: [] })}
          onSearchClicked={this.handleSearch}
        />

        {this.state.loading && (
          <img src={Loading} alt="loading" className="loading" />
        )}

        {this.state.error && (
          <p style={{ color: "red" }}>
            <strong>Error! </strong> Please provide a search query first
          </p>
        )}

        {this.state.searchTerm === "" && (
          <div className="no-content">
            ☹ Nothing here yet - try searching for a book!
          </div>
        )}
        {this.state.books.length < 1 && this.state.searchTerm !== "" ? (
          <div className="no-content">☹ Sorry, no book no found!</div>
        ) : (
          <Books books={this.state.books} />
        )}
      </div>
    );
  }
}

export default App;

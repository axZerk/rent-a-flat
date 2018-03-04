import React, { Component } from "react";
import "./styles.css";
import FlatsList from "../FlatsList";
import Counter from "../Counter";
import AppBar from "../AppBar";
import SearchForm from "../SearchForm";
import GoogleMap from "../GoogleMap";
import { fetchAsyncFlats } from "../../api";

class App extends Component {
  state = {
    flats: [],
    selectedFlat: null,
    filterQuery: "",
    loading: true
  };

  componentDidMount() {
    fetchAsyncFlats().then(data =>
      this.setState({ flats: data, loading: false })
    );
  }

  handleFlatSelect = flat => {
    this.setState({
      selectedFlat: flat
    });
  };

  handleFilter = filter => {
    this.setState({
      filterQuery: filter
    });
  };

  getFilteredFlats = () => {
    const { flats, filterQuery } = this.state;

    return flats.filter(flat =>
      flat.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  };

  render() {
    const { flats, selectedFlat, filterQuery, loading } = this.state;

    return (
      <div>
        <AppBar>
          <h1 style={{ color: "#fff" }}>Rent-A-Flat</h1>
          <SearchForm onFilter={this.handleFilter} />
        </AppBar>
        <main className="App__body">
          {loading
            ? <h1>Loading....</h1>
            : <FlatsList
              flats={this.getFilteredFlats()}
              handleFlatSelect={this.handleFlatSelect}
            />
          }
          <GoogleMap flats={this.getFilteredFlats()} selectedFlat={selectedFlat} />
        </main>
      </div>
    );
  }
}

export default App;

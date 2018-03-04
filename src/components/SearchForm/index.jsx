import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = evt => {
    const value = evt.target.value;

    this.setState(
      {
        inputValue: value
      },
      () => {
        this.props.onFilter(this.state.inputValue);
      }
    );
  };

  render() {
    return (
      <form action="#">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

// const SearchForm = () => {
//   let inputRef = null;

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     console.log(inputRef.value);
//   };

//   return (
//     <form action="#" onSubmit={handleSubmit}>
//       <input type="text" ref={node => (inputRef = node)} />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

import React, { Component } from "react";

class SearchBar extends Component {
  state = { input: "" };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //this.props must match name of prop passed in
    this.props.onUserSubmit(this.state.input);
  };

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <label>Video Search</label>
              <div className="input-field col s12">
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;

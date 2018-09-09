import React, { Component } from "react";

class PicOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "SG",
      email: "",
      postalAddress: "",
      numberOfCopiesFor1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberOfCopiesFor2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberOfCopiesFor3: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberOfCopiesFor4: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberOfCopiesFor5: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  handleChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  handleChangephoneNumber = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  handleChangeAddress = event => {
    this.setState({ postalAddress: event.target.value });
  };

  handleSubmit = event => {
    alert(
      "Summary Of Order: " +
        "Last Name" +
        this.state.lastName +
        "First Name" +
        this.state.firstName
    );
  };
  render() {
    return (
      <div className="pic-order-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Last name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleChangeLastName}
            />
          </label>
          <br />
          <label>
            First name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleChangeFirstName}
            />
          </label>
          <br />
          <label>
            Phone number
            <input
              type="number"
              value={this.state.phoneNumber}
              onChange={this.handleChangephoneNumber}
            />
          </label>
          <br />
          <label>
            Country
            <input type="text" value={this.state.country} />
          </label>
          <br />
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Address
            <input
              type="text"
              value={this.state.postalAddress}
              onChange={this.handleChangeAddress}
            />
          </label>
          <label>
            Number of copies for #1:
            <select
              value={this.state.numberOfCopiesFor1}
              onChange={this.handleChange}
            >
              {this.state.numberOfCopiesFor1.map(eachValue => {
                return <option value={eachValue}>{eachValue}</option>;
              })}
            </select>
          </label>
          <label>
            Number of copies for #2:
            <select
              value={this.state.numberOfCopiesFor2}
              onChange={this.handleChange}
            >
              {this.state.numberOfCopiesFor2.map(eachValue => {
                return <option value={eachValue}>{eachValue}</option>;
              })}
            </select>
          </label>
          
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default PicOrderForm;

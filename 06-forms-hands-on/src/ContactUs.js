import React from "react";

export default class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "",
    country: ""
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Type of Enquiry</label>
          <input
            type="radio"
            name="enquiry"
            value="support"
            checked={this.state.enquiry ==='support'}
            onChange={this.updateFormField}
          />
          <label>Tech Support</label>
          <input
            type="radio"
            name="enquiry"
            value="sales"
            checked={this.state.enquiry ==='sales'}
            onChange={this.updateFormField}
          />
          <label>Sales</label>
          <input
            type="radio"
            name="enquiry"
            value="marketing"
            checked={this.state.enquiry ==='marketing'}
            onChange={this.updateFormField}
          />
          <label>Marketing</label>
        </div>
        <div>
            <label>Country</label>
            <select name="country" value={this.state.country} onChange={this.updateFormField}>
                <option>---Select a country---</option>
                <option>Singapore</option>
                <option>Malaysia</option>
                <option>Thailand</option>
            </select>

        </div>

      </React.Fragment>
    );
  }
}

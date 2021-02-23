import React from "react";

export default class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "",
    country: "",
    followUp: []
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateFollowUp = event => {
    // check if the item already exists in the array
    if (this.state.followUp.includes(event.target.value) === false) {
      // 1. clone the array
      let clone = [...this.state.followUp];
      // let clone = this.state.followUp.slice()

      // 2.modify the cloned array (i.e push)
      clone.push(event.target.value);

      // 3. put back into the state
      this.setState({
        followUp: clone
      });
    } else {
      // if the event.target.value is already in the array
      // means that we are unchecking the checkbox

      // 1. clone the array
      let clone = this.state.followUp.slice();

      // 2. modify the cloned array (remove the item from the array)
      let index = clone.indexOf(event.target.value);
      clone.splice(index, 1);

      // 3. set the clone back into the state
      this.setState({
        followUp: clone
      });
    }
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
            checked={this.state.enquiry === "support"}
            onChange={this.updateFormField}
          />
          <label>Tech Support</label>
          <input
            type="radio"
            name="enquiry"
            value="sales"
            checked={this.state.enquiry === "sales"}
            onChange={this.updateFormField}
          />
          <label>Sales</label>
          <input
            type="radio"
            name="enquiry"
            value="marketing"
            checked={this.state.enquiry === "marketing"}
            onChange={this.updateFormField}
          />
          <label>Marketing</label>
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
            <option>---Select a country---</option>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Thailand</option>
          </select>
        </div>
        <div>
          <label>Follow up with me via:</label>
          <input
            type="checkbox"
            name="followUp"
            value="email"
            onChange={this.updateFollowUp}
          />
          <label>Email</label>
          <input
            type="checkbox"
            name="followUp"
            value="phone"
            onChange={this.updateFollowUp}
          />
          <label>Phone</label>
          <input
            type="checkbox"
            name="followUp"
            value="mail"
            onChange={this.updateFollowUp}
          />
          <label>Slow Mail</label>
          <div>
            <button
              onClick={this.showInfo}
              disabled={this.canSubmit() === false}
            >
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  canSubmit = () => {
    return (
      this.state.firstName.length > 0 && // check if the first name is filled in
      this.state.lastName.length > 0 && // check if the last name is filled in
      this.state.enquiry.length > 0 && // check if the enquiry is filled in
      this.state.country.length > 0 && // check if the country is filled in
      this.state.followUp.length > 0
    );
  };

  showInfo = () => {};
}

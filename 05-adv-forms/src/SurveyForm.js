import React from "react";

// Questions the form will ask -> form input types
// email -> text field
// rate how happy -> radio buttons (unhappy, satisifed, happy)
// which country are you from -> dropdown
// select how they know abt the event -> checkboxes

export default class SurveyForm extends React.Component {
  state = {
    email: "",
    rating: 3,
    country: "",
    knowAbout: [], // 'cos we can select multiple values with a checkbox
    // so the default for knowAbout will be an array
    keepInTouch: [] // emails, SMS, whatsapp, fb etc.
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.updateEmail}
            />
          </div>
          <div>
            <label className="form-label">Rating</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={1}
                onChange={this.updateRating}
                name="rating"
                checked={parseInt(this.state.rating) === 1}
              />
              <label className="form-check-label" for="defaultCheck1">
                Unhappy
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={2}
                onChange={this.updateRating}
                name="rating"
                checked={parseInt(this.state.rating) === 2}
              />
              <label className="form-check-label">Average</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={3}
                onChange={this.updateRating}
                name="rating"
                checked={parseInt(this.state.rating) === 3}
              />
              <label className="form-check-label" for="defaultCheck1">
                Happy
              </label>
            </div>
          </div>
          {/* end radio buttons */}
          <div>
            <label className="form-label">How you know about us</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="advertisement"
                onChange={this.updateKnowAbout}
                name="knowAbout"
              />
              <label className="form-check-label" for="defaultCheck1">
                Advertisement
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="social-media"
                onChange={this.updateKnowAbout}
                name="knowAbout"
              />
              <label className="form-check-label">Social Media</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="word-of-mouth"
                onChange={this.updateKnowAbout}
                name="knowAbout"
              />
              <label className="form-check-label" for="defaultCheck1">
                Word of mouth
              </label>
            </div>
          </div>
          {/* end checkboxes */}
          <div>
            <label className="form-label">Country</label>
            <select
              className="form-control"
              name="country"
              value={this.state.country}
              onChange={this.updateCountry}
            >
              <option>Singapore</option>
              <option>Malaysia</option>
              <option>Indonesia</option>
            </select>
          </div>
          <div>
            <label className="form-label">How do keep in touch</label>
            <select 
              className="form-control"
              name="keepInTouch"
              onChange={this.updateKeepInTouch}
              value={this.state.keepInTouch}
              multiple
            >
              <option>Email</option>
              <option>SMS</option>
              <option>Whatsapp</option>
              <option>Mail Catalog</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
  updateEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  updateRating = event => {
    this.setState({
      rating: event.target.value
    });
  };
  updateKnowAbout = event => {
    // BEGINNER WAY BUT NOT ENCOURAGED
    // BECAUSE THIS DOES NOT RESPECT IMMUTABILITY
    //   let knowAbout = this.state.knowAbout;
    //   knowAbout.push(event.target.value);
    //   this.setState({
    //       'knowAbout': knowAbout
    //   })

    // search terms: immutable way to mutate an array
    // how to add to an array in an immutabe way
    // 1. make a clone of the original array
    // 2. add to the clone
    // 3. set the clone back into the state

    /*
    // METHOD 1: Using traditional
    // 1. make a clone of the original array
    let clone = this.state.knowAbout.slice();
    // 2. add to the clone
    clone.push(event.target.value)
    // 3. set the clone back into the state
    this.setState({
        'knowAbout': clone
    })
    */

    // METHOD 3: ALL IN ONE SHORT FORM
    // this.setState({
    //     'knowAbout': [...this.state.knowAbout, event.target.value]
    // })

    // check if the checkbox is already checked
    if (this.state.knowAbout.includes(event.target.value) === false) {
      // METHOD 2: Using ES6
      // 1.make a clone of the array
      let clone = [...this.state.knowAbout];
      // 2. add to the clone
      clone.push(event.target.value);
      // 3. set state
      this.setState({
        knowAbout: clone
      });
    } else {
      // the checkbox is already checked, so we should remove the string from the array

      // // 1. clone the array
      // let clone = this.state.knowAbout.slice();

      // // 2. remove the item from the cloned array
      // let filtered = clone.filter(function(item){
      //     return item !== event.target.value
      // })

      // // 3. we set the cloned array back to the state
      // this.setState({
      //     'knowAbout': filtered
      // })

      let clone = [...this.state.knowAbout];
      clone = clone.filter(item => item !== event.target.value);
      this.setState({
        knowAbout: clone
      });

      // this.setState({
      //     'knowAbout': [...this.state.knowAbout].filter(item=>item!==event.target.value)
      // })
    }
  }; // end updateKnowAbout

  updateCountry = event => {
    this.setState({
      country: event.target.value
    });
  };

  updateKeepInTouch = event => {
    let selectedOptions = event.target.selectedOptions;
    console.log(selectedOptions);
    //   let options = Array.from(selectedOptions, function(option) {
    //       return option.value;
    //   })
    //console.log(options)

    let optionsInText = [];
    for (let option of selectedOptions) {
      optionsInText.push(option.value);
    }

    this.setState({
        'keepInTouch':optionsInText
    })
  };
}

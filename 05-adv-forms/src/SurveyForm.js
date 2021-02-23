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
    knowAbout: [] // 'cos we can select multiple values with a checkbox
    // so the default for knowAbout will be an array
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
                name="rating"
              />
              <label className="form-check-label" for="defaultCheck1">
                Word of mouth
              </label>
            </div>
          </div>
          {/* end checkboxes */}
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
}

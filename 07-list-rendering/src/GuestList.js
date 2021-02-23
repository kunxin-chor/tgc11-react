import React from "react";

export default class GuestList extends React.Component {
  state = {
    guests: ["Tony Stark", "Hawkeye", "Spider Man", "Bruce Wayne"]
  };
  render() {
    const renderList = items => {
      return items.map(function(i) {
        return <li>{i}</li>;
      });
    };

    let listItems = [];
    for (let guest of this.state.guests) {
        listItems.push(<li>{guest}</li>)
    }

    return (
      <React.Fragment>
        <h1>Alternate Technique 1</h1>
        <ul>{renderList(this.state.guests)}</ul>

        <h1>Technique 2</h1>
        <ul>
            {listItems}
        </ul>
      </React.Fragment>
    );
  }
  
}

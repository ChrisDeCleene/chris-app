import React from "react";

class LeagueSize extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onLeagueSizeChange(event.target.value)
  }

  render() {
    const leagueSizes = [8, 10, 12, 14, 16, 20]
    const display = leagueSizes.map((leagueSize)=> (
      <option value={leagueSize}
              key={leagueSize}>{leagueSize}
      </option>
    ))
    const isLeagueSize = true;
    if (isLeagueSize) {
      return(
        <div>
          <h2>Select League Size</h2>
          <p>Select Number of Teams</p>
          <select id="league" onChange={this.handleChange} >
            {display}
          </select>
          <button onClick={this.updateSize} >
            Submit
          </button>
        </div>
      )
    }
  };
}

export default LeagueSize;
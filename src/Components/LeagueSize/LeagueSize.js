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
<<<<<<< HEAD
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
=======
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
>>>>>>> cff72467afa659772d15908172af5bbfdd2ff7ff
  };
}

export default LeagueSize;
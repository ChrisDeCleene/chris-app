import React from "react";
import LeagueSize from "../LeagueSize/LeagueSize";
import PlayerNames from "../PlayerNames/PlayerNames";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onLeagueSizeChange(event.target.value)
  }

  render() {
    return(
      <div>
        <LeagueSize onLeagueSizeChange={this.props.onLeagueSizeChange} />
        <PlayerNames />
      </div>
    );
  }
};

export default Main;
import React from "react";
import LeagueSize from "../LeagueSize/LeagueSize";
import PlayerNames from "../PlayerNames/PlayerNames";

class Main extends React.Component {

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
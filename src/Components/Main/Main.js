import React from "react";
import LeagueSize from '../LeagueSize/LeagueSize';

class Main extends React.Component {

  render() {
    const isMain = true;
    if(isMain) {
      return (
      <LeagueSize leagueSize={this.props.leagueSize} onLeagueSizeChange={this.props.onLeagueSizeChange} />
      )
    }
  }
}

export default Main;
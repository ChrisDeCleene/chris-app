import React from "react";
<<<<<<< HEAD
import LeagueSize from '../LeagueSize/LeagueSize';
=======
import LeagueSize from "../LeagueSize/LeagueSize";
import PlayerNames from "../PlayerNames/PlayerNames";
>>>>>>> cff72467afa659772d15908172af5bbfdd2ff7ff

class Main extends React.Component {

  render() {
<<<<<<< HEAD
    const isMain = true;
    if(isMain) {
      return (
      <LeagueSize leagueSize={this.props.leagueSize} onLeagueSizeChange={this.props.onLeagueSizeChange} />
      )
    }
  }
}
=======
    return(
      <div>
        <LeagueSize onLeagueSizeChange={this.props.onLeagueSizeChange} />
        <PlayerNames />
      </div>
    );
  }
};
>>>>>>> cff72467afa659772d15908172af5bbfdd2ff7ff

export default Main;
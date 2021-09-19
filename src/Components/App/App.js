import './App.css';
import React from 'react';
import Main from '../Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueSize: ''
    };
    this.updateLeagueSize = this.updateLeagueSize.bind(this);
  }

  updateLeagueSize(leagueSize) {
    this.setState({
      leagueSize: leagueSize
    })
  }

  render(){
    return (
      <div className="App">
        <Main leagueSize={this.state.leagueSize} onLeagueSizeChange={this.updateLeagueSize} />
      </div>
    );
  }
}

export default App;
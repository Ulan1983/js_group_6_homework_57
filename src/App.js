import React, {Component} from 'react';
import './App.css';
import FinanceBuilder from "./Containers/FinanceBuilder/FinanceBuilder";


class App extends Component {
  render() {
    return (
        <div className="App">
          <FinanceBuilder />
        </div>
    );
  }
}

export default App;

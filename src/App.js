import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing"
          credentials="s0UZYa1lr:1ed8e0e1-a640-4317-b3db-021dffbc82e8"
          type="listing"
        >
          Hello from ReactiveSearch!
        </ReactiveBase>
      </section>
    );
  }
}

export default App;

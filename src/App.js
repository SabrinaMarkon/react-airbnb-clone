import React, { Component } from 'react';
import { ReactiveBase, DateRange, NumberBox, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="housing" 
          /* 
          Create appbase.io account and
          clone https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJ3AQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsW71dAzA7YYc-SS2NBdZOu2iiqUDTwzb8SRY-P60qxz_ZFKoJgMwEJushaRl-FxMxQqDCBLVG-xBlA5HfOZXDzUuGnntd_Zw9u4C0YdVJQ8HvMJrVO8AfQy73d9wq7TjySsVRv-NAKU5ZUw4jxU0ynrQflgPkDLN6AGDv4jeOi8Ir9BBSZ-bdv4J2oq7eCzLoC-gl9qTZsTRLHsXPhHvClG5we6nqctwdPgHqEWqj25nG0qo1RkmJYY_ZTF4XEJcMQyIw-2Rck0OE-ZTR7g8d3ste2uR2u9JbeJj9fjtiWHVAv4cBigXZG0RRBK2__eggwE&editable=false to get your own credentials for the bwlow credentials properties.
          */
          credentials="s0UZYa1lr:1ed8e0e1-a640-4317-b3db-021dffbc82e8" 
          type="listing" 
          theme={{
              primaryColor: '#ff3a4e'
          }}
        >
          <nav className="nav">
            <div className="title">Airfun</div>
          </nav>
          <div className="left-col">
            <DateRange
              dataField="date_from" 
              componentId="DateRangeSensor" 
              title="When" 
              numberOfMonths={2} 
              queryFormat="basic_date" 
              initialMonth={new Date('04-01-2017')} 
              />
          </div>
          

        </ReactiveBase>
      </section>
    );
  }
}

export default App;

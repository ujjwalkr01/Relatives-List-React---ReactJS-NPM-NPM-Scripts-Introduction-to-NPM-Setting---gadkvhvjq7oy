import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key={`relativeList`}>
          <li key={`relativeListItem1`}>Ankita</li>
          <li key={`relativeListItem2`}>Ujjwal</li>
          <li key={`relativeListItem3`}>Ritika</li>
          <li key={`relativeListItem4`}>Shubham</li>
          <li key={`relativeListItem5`}>Aman</li>
        </ol>
      </div>
    );
  }
}

export default App;

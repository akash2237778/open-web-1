import React from 'react';

import HomeNavBar from "./components/HomeNavBar";
import HomeCarousel from "./components/HomeCarousel";


class App extends React.Component {
  
 

  render() {
    
    return (
      <div><HomeNavBar />
      <HomeCarousel />
      <h1>Container 2 </h1>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('container'));
export default App;
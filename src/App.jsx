import './App.css';
import Newpage from './newpage.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  render() {
    return (
    <div id="Parent1">
     <Newpage />
    </div>   
    );
  }
}

export default App;
//react-bootstrap e do width edhe ke div edhe ke class te specifikuar vecmas per klasen/divin ne media tek css,qe mos tlevizi pozicion kur ndyshon madhesia ekranit.
//.container[style] per tbo override kodin e bootstrap
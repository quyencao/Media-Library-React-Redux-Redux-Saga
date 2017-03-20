import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';

class App extends Component {
    render() {
        return (
          <div className="container-fluid text-center">
              <Header/>
              { this.props.children }
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App;

// Whereas container components are responsible for your business logic and connecting with the
//     store, presentational components are responsible for the look of your view.
import React from 'react';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
        <>
          <button onClick={this.props.history.goBack}>Go back!</button>
          <p>Welcome!</p>
  
        </>
      );
    }
  }
  
  export default Home;
  
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render(){
    return(
      <div clasName="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

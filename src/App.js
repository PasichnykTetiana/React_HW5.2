import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: null,
      two: null,
      three: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          oneProp={this.state.one}
          twoProp={this.state.two}
          threeProp={this.state.three}
          onHandlerChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

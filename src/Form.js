import React from 'react';

export default class Frorm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        textOne: null,
        textTwo: null,
        textThree: null,
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      obj: {
        ...this.state.obj,
        textOne: '',
        textTwo: '',
        textThree: '',
      },
    });
    console.log(JSON.stringify(this.state.obj));
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      obj: {
        ...this.state.obj,
        textOne: this.props.oneProp,
        textTwo: this.props.twoProp,
        textThree: this.props.threeProp,
      },
    });
    console.log(JSON.stringify(this.state.obj));
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <label>Дз 2</label>
            <input name="one" value={this.props.oneProp} onChange={this.props.onHandlerChange} />
            <input name="two" value={this.props.twoProp} onChange={this.props.onHandlerChange} />
            <input
              name="three"
              value={this.props.threeProp}
              onChange={this.props.onHandlerChange}
            />
            <input type="submit" value="Submit" onClick={this.handleChange} />
            <br />
            {JSON.stringify(this.state.obj)}
          </form>
        </div>
      </div>
    );
  }
}

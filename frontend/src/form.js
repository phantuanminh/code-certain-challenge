import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        num: '',
      };
  }

  handleChange = event => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState( { [event.target.name]: event.target.value } );
  }

  addFirst = event => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      num: this.state.num
    };

    axios.get(`http://localhost:5000/api`, { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            First name: <br />
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Number: <br />
            <input type="number" name="num" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit" onClick={this.addFirst}>Add First</button>
          <button type="submit" onClick={this.addEnd}>Add End</button>
        </form>
      </div>
    )
  }
}

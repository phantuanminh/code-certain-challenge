import React, { Component } from 'react';

import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  addFirst(name, num) {
  }

  addEnd(name, num) {

  }

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        this.setState({ persons: res.data });
      })
  }

  render() {
    return (
      <div>
        <p>
        max_length
        </p>
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

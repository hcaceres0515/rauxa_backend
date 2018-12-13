import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://cz5yc10n2g.execute-api.us-east-2.amazonaws.com/dev")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        {
          let posts = data.map((item, index)=> {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.imgUrl}</td>
              </tr>
            )
          })
          this.setState({posts: posts});
        }
      })

  }

  onSubmit = fields => {
    console.log(fields);
  }

  render() {
    return (
      <div className="App">
        <header>

        </header>

        <div>

          <div className="container">

            <h2 className="mt-5 mb-5"> Rauxa Challenge </h2>

            <div className="row">
              <Form onSubmit={fields => this.onSubmit(fields)}/>
            </div>

            <table className="table custom-table mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

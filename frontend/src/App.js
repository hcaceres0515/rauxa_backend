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
    this.getData();

  }

  getData = () => {
    let S3_URL = "https://s3.us-east-2.amazonaws.com/rauxabucket/";
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
                <td><img src={S3_URL+item.imgUrl} width="80" height="80"></img></td>
              </tr>
            )
          })
          this.setState({posts: posts});
        }
      })
  }

  async saveImg(fields) {

    try {
      let response = await fetch('https://sn6cz2ac3b.execute-api.us-east-2.amazonaws.com/dev/uploadImage', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(fields)
      });

      let responseJson = await response.json();
      return responseJson.result;
    } catch (e) {

    }
    this.getData();

  }

  async sendData(fields) {
    fields['createdAt'] = 1544783399358;
    fields['updatedAt'] = 1544783399358;

    try {
      let response = await fetch('https://sn6cz2ac3b.execute-api.us-east-2.amazonaws.com/dev/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(fields)
      });

      let responseJson = await response.json();

      return responseJson.result;
    } catch (e) {

    }
    this.saveImg(fields.imgUrl, fields.imgName);
  }

  onSubmit = fields => {
    this.saveImg(fields);
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

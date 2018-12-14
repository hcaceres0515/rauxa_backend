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

  async saveImg(base64Image, imgName) {

    var img = {
	     //base64Image: "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"
       base64Image: base64Image,
       imageName: imgName
    }

    try {
      let response = await fetch('https://sn6cz2ac3b.execute-api.us-east-2.amazonaws.com/dev/uploadImage', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(img)
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

    console.log(fields);

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

    this.sendData(fields);

    console.log(fields);
  }

  render() {
    return (
      <div className="App">
        <header>

        </header>

        <div>

          <div className="container">

            {/*<h2 className="mt-5 mb-5"> Rauxa Challenge </h2> */}

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

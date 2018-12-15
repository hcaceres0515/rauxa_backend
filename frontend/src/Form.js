import React from 'react';

export default class Form extends React.Component {

  state = {
    name: '',
    phone: '',
    base64Image: '',
    imgName: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleselectedFile = e => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=(e)=>{
      this.setState({
        'base64Image': e.target.result.split(',')[1],
        'imgName': file.name
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(
      {
        name: '',
        phone: '',
        base64Image: ''
      }
    );

  }

  render() {
    return (
      <div className="container mb-5">
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="name" value={this.state.name}
              onChange={e => this.change(e)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="phone" value={this.state.phone}
              onChange={e => this.change(e)}/>
            </div>
          </div>

          <div className="form-group row">
            <input type="file" className="form-control" onChange={e => this.handleselectedFile(e)}/>
          </div>

          <button className="btn btn-primary btn-xs" onClick={(e) => this.onSubmit(e)}> Save </button>

        </form>
      </div>

    )
  }

}

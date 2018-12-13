import React from 'react';

export default class Form extends React.Component {

  state = {
    name: '',
    phone: '',
    img: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(
      {
        name: '',
        phone: '',
        img: ''
      }
    );

    // console.log(this.state);
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
            <input type="file" className="form-control" />
          </div>

          <button className="btn btn-primary btn-xs" onClick={(e) => this.onSubmit(e)}> Save </button>

        </form>
      </div>

    )
  }

}

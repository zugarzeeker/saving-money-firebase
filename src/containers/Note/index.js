import React, { Component } from 'react';

export default class Note extends Component {
  onSubmit = () => {
    const data = {
      type: this.refs.type.value,
      price: this.refs.price.value,
      name: this.refs.name.value,
      date: this.refs.date.value
    }
    console.log('submit', data)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Note</h1>
          <div>
            <div className="form-group">
              <label>Type</label>
              <input ref="type" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input ref="price" type="number" className="form-control" defaultValue={0} min={0} />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input ref="name" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input ref="date" type="datetime-local" className="form-control"/>
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
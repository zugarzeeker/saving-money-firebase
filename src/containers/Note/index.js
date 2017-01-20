import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Note</h1>
          <form>
            <div className="form-group">
              <label>Type</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" defaultValue={0} min={0} />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="datetime-local" className="form-control"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
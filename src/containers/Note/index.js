import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Note extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }
  onSubmit() {
    const data = {
      type: this.refs.type.value,
      price: this.refs.price.value,
      name: this.refs.name.value,
      // date: this.refs.date.value,
      date: this.state.startDate,
      time: this.refs.time.value
    }
    console.log('submit', data)
  }

  handleChange(newDate) {
    this.setState({
      startDate: newDate
    });
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
              <label>Date</label><br/>
              <DatePicker
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input ref="time" type="time" className="form-control"/>
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

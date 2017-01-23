import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import './Note.css';

export default class Note extends Component {
  constructor() {
    super();
    this.state = {
      time: moment()
    };
  }

  onSubmit() {
    const data = {
      type: this.refs.type.value,
      price: this.refs.price.value,
      name: this.refs.name.value,
      time: this.state.time.valueOf()
    }
    console.log('[submit]', data.time)
  }

  handleChange(value) {
    this.setState({
      time: value
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
                selected={this.state.time}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Time</label><br/>
              <TimePicker
                className="time-picker"
                defaultValue={this.state.time}
                onChange={this.handleChange.bind(this)}
                showSecond={false}
              />
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

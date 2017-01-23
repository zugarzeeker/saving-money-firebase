import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import './Note.css';
import cn from 'classnames';
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-react-firebase';
const { dataToJS } = helpers


// @firebase([
//   'myaccount'
// ])
// @connect(
//   ({ firebase }) => ({
//     myaccount: dataToJS(firebase, 'myaccount'),
//   })
// )
class Note extends Component {
  constructor() {
    super();
    this.state = {
      time: moment(),
      transaction: 'income'
    };
  }

  onSubmit() {
    const data = {
      type: this.state.transaction,
      price: +this.refs.price.value || 0,
      name: this.refs.name.value,
      time: this.state.time.valueOf(),
      transaction: this.state.transaction
    }
    this.props.firebase.push('myaccount', data, () => {
      console.log('[submit]', data)
    });
  }

  handleChange(value) {
    this.setState({
      time: value
    });
  }

  toggleTransactionType() {
    this.setState({
      transaction: this.state.transaction === 'income' ? 'expense' : 'income'
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Note</h1>
          <div>
            <div className="form-group">
              <label>Type: </label>
              <button type="button" className={cn('btnType', 'btn', {
                'btn-success': this.state.transaction === 'income',
                'btn-danger': this.state.transaction === 'expense'
              })} onClick={this.toggleTransactionType.bind(this)}>{this.state.transaction}</button>
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


export default connect(
  ({ firebase }) => ({
    myaccount: dataToJS(firebase, 'myaccount')
  })
)(
  firebase([
    'myaccount'
  ])(Note)
);

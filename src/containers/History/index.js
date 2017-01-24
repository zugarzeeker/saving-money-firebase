import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'redux-react-firebase';
const { dataToJS } = helpers;
import _ from 'lodash';

class History extends Component {
  renderTransaction({ name, type, price, time }, id) {
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{price}</td>
        <td>{time}</td>
      </tr>
    );
  }

  renderTransactions() {
    return (
      _.map(this.props.transactions, (transaction, id) => (
        this.renderTransaction(transaction, id)
      ))
    );
  }

  render() {
    return (
      <table>
        <tbody>{this.renderTransactions()}</tbody>
      </table>
    );
  }
}

export default connect(
  ({ firebase }) => ({
    transactions: dataToJS(firebase, '/myaccount')
  })
)(
  firebase([
    ['/myaccount']
  ])(History)
);

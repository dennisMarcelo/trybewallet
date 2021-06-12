import React from 'react';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import TableExpendes from '../components/TableExpendes';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <TableExpendes />
      </>
    );
  }
}

export default Wallet;

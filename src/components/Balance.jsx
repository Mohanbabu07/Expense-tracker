import React from 'react'

function Balance({ transactions }) {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => 
        (acc += item)
    , 0);
  return (
      <>
          <h3>Balance</h3>
          <h1>${ total}</h1>
    </>
  )
}

export default Balance
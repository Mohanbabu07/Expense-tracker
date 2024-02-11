import React from 'react'

function IncomeExp({transactions }) {
  const amounts = transactions.map(transaction =>transaction.amount);
const income = amounts
.filter(amount => amount > 0)
.reduce((acc, amount) => acc += amount,0)
.toFixed(2);

const expense = (amounts 
.filter(amount => amount < 0)
.reduce((acc, amount) => acc += amount,0)*-1)
.toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>

  )
}

export default IncomeExp
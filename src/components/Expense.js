import React from 'react';
import expenses from './data';

function Expense(props) {
    const handleClick = (expense) => {
        alert(`You clicked ${expense.name} - Php${expense.price}`);
    }

    const totalExpenses = expenses.reduce((accumulator, expense) => {
        return accumulator + expense.price;
    }, 0);

    return (
        <div style={{ textAlign: 'center'}}>
            <h2>List of Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li style={{ backgroundColor: 'skyblue', padding: 4, marginBottom: 10 }} key={expense.id} onClick={() => handleClick(expense)}>
                        {expense.name} - Php{expense.price}
                    </li>
                ))}
            </ul>
            <p>TOTAL: {totalExpenses}</p>
        </div>
    );
}

export default Expense;

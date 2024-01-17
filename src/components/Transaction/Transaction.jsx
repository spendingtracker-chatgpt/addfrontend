import React, { useState } from 'react';
import { IoCalendarSharp } from "react-icons/io5";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const Transaction = () => {
  const transactions = [
    { id: 1, sender: 'Hassani Maryeme', amount: -500, date: '11 Janv 2024', status: 'Pending' },
    { id: 2, sender: 'Alami Alae', amount: 2500, date: '08 Dec 2023', status: 'Success' },
    { id: 3, sender: 'Alaoui Hatim', amount: 3700, date: '22 Oct 2023', status: 'Failed' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5; 
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  const containerStyle = {
    backgroundColor: 'var(--bgSoft)',
    padding: '20px',
    borderRadius: '10px',
  };

  const titleStyle = {
    marginBottom: '20px',
    fontWeight: '200',
    color: 'var(--textSoft)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableTdStyle = {
    padding: '10px',
    border: '1px solid var(--bgSoft)',
  };

  const userStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  };

  const userImageStyle = {
    objectFit: 'cover',
    borderRadius: '50%',
  };

  const statusStyle = {
    borderRadius: '5px',
    padding: '5px',
    fontSize: '14px',
    color: 'white',
    display: 'inline-block',
  };

  const pendingStyle = {
    backgroundColor: '#f7cb7375',
  };

  const successStyle = {
    backgroundColor: '#afd6ee75',
  };

  const failedStyle = {
    backgroundColor: '#f7737375',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>All Transactions</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <IoCalendarSharp size={20} style={{ marginRight: '10px' }} />
        <h2 style={titleStyle}>This Month</h2>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <td style={tableTdStyle}>Sender</td>
            <td style={tableTdStyle}>ID Transaction</td>
            <td style={tableTdStyle}>Amount</td>
            <td style={tableTdStyle}>Transaction Date</td>
            <td style={tableTdStyle}>Status</td>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={tableTdStyle}>
                <div style={userStyle}>
                  <img src="" alt="" width={40} height={40} style={userImageStyle} />
                  {transaction.sender}
                </div>
              </td>
              <td style={tableTdStyle}>{transaction.id}</td>
              <td style={tableTdStyle}>{transaction.amount > 0 ? `Dhs +${transaction.amount}` : `Dhs ${transaction.amount}`}</td>
              <td style={tableTdStyle}>{transaction.date}</td>
              <td style={tableTdStyle}>
                <span style={{ ...statusStyle, ...(transaction.status === 'Pending' ? pendingStyle : (transaction.status === 'Success' ? successStyle : failedStyle)) }}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <GrLinkPrevious size={20} />
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
          <GrLinkNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default Transaction;

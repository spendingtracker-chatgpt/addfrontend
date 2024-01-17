"use client"
import React, { useState } from 'react';
import { IoCalendarSharp } from "react-icons/io5";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const Transaction = () => {
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
      };
    
      const tabletdStyle = {
        padding: '10px',
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
    <div className={containerStyle}>
      <h2 className={titleStyle}>All Transactions</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <IoCalendarSharp size={20} style={{ marginRight: '10px' }} />
                <h2 style={titleStyle}>This Month</h2>
      </div>
      <table className={tableStyle}>
        <thead>
          <tr>
            <td>Sender</td>
            <td>ID Transaction</td>
            <td>Amount</td>
            <td>Transaction Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={userStyle}>
                <img src="" alt="" width={40} height={40} className={userImageStyle} />
                Hassani Maryeme
              </div>
            </td>
            <td>1</td>
            <td>Dhs -500,00</td>
            <td>11 Janv 2024</td>
            <td>
              <span className={`${ pendingStyle} ${statusStyle}`}>Pending</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={userStyle}>
                <img src="" alt="" width={40} height={40} className={userImageStyle} />
                Alami Alae
              </div>
            </td>
            <td>2</td>
            <td>Dhs +2500,00</td>
            <td>08 Dec 2023</td>
            <td>
              <span className={`${successStyle} ${statusStyle}`}>Success</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={userStyle}>
                <img src="" alt="" width={40} height={40} className={userImageStyle} />
                Alaoui Hatim
              </div>
            </td>
            <td>3</td>
            <td>Dhs +3700,00</td>
            <td>22 Oct 2023</td>
            <td>
              <span className={`${failedStyle} ${statusStyle}`}>Failed</span>
            </td>
          </tr>
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

import React, { useState } from 'react';

const dummyOrders = [
  {
    fromCity: 'Raipur',
    toCity: 'Champa',
    consignorName: 'naz',
    consigneeName: 'laxmi',
    total: 100,
    paidAmt: 0,
    balance: 100,
    deliveryDate: '2024-09-19',
    deliveryStatus: 'Delivered',
  },
  {
    fromCity: 'Raipur',
    toCity: 'Baloda',
    consignorName: 'Chandan Patel',
    consigneeName: 'Mahesh',
    total: 18700,
    paidAmt: 0,
    balance: 18700,
    deliveryDate: '',
    deliveryStatus: 'In Queue',
  },
  {
    fromCity: 'Raipur',
    toCity: 'Champa',
    consignorName: 'Pawan',
    consigneeName: 'Sinha Mension',
    total: 2000,
    paidAmt: 2000,
    balance: 0,
    deliveryDate: '2024-09-24',
    deliveryStatus: 'Delivered',
  },
  // Add more entries as needed...
];

const AllOrders = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    fromCity: '',
    toCity: '',
    consignorName: '',
    consigneeName: '',
    biltiNo: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredOrders = dummyOrders.filter((order) => {
    const matchFromCity = filters.fromCity === '' || order.fromCity.includes(filters.fromCity);
    const matchToCity = filters.toCity === '' || order.toCity.includes(filters.toCity);
    const matchConsignor = filters.consignorName === '' || order.consignorName.includes(filters.consignorName);
    const matchConsignee = filters.consigneeName === '' || order.consigneeName.includes(filters.consigneeName);
    return matchFromCity && matchToCity && matchConsignor && matchConsignee;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>All Orders</h2>

      {/* Filter section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
        <input type="date" name="fromDate" value={filters.fromDate} onChange={handleFilterChange} placeholder="From Date" />
        <input type="date" name="toDate" value={filters.toDate} onChange={handleFilterChange} placeholder="To Date" />
        <input name="fromCity" placeholder="From City" value={filters.fromCity} onChange={handleFilterChange} />
        <input name="toCity" placeholder="To City" value={filters.toCity} onChange={handleFilterChange} />
        <input name="consignorName" placeholder="Consignor's Name" value={filters.consignorName} onChange={handleFilterChange} />
        <input name="consigneeName" placeholder="Consignee's Name" value={filters.consigneeName} onChange={handleFilterChange} />
        <input name="biltiNo" placeholder="Bilti No" value={filters.biltiNo} onChange={handleFilterChange} />
        <button onClick={() => setFilters({ fromDate: '', toDate: '', fromCity: '', toCity: '', consignorName: '', consigneeName: '', biltiNo: '' })}>Reset</button>
      </div>

      {/* Table */}
      <table border="1" width="100%" cellPadding={6}>
        <thead style={{ background: '#f0f0f0' }}>
          <tr>
            <th>From City</th>
            <th>To City</th>
            <th>Consignor Name</th>
            <th>Consignee Name</th>
            <th>Total</th>
            <th>Paid Amt</th>
            <th>Balance</th>
            <th>Delivery Date</th>
            <th>Delivery Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length === 0 ? (
            <tr><td colSpan="10" style={{ textAlign: 'center' }}>No orders found</td></tr>
          ) : (
            filteredOrders.map((order, i) => (
              <tr key={i}>
                <td>{order.fromCity}</td>
                <td>{order.toCity}</td>
                <td>{order.consignorName}</td>
                <td>{order.consigneeName}</td>
                <td>₹{order.total.toLocaleString()}</td>
                <td>₹{order.paidAmt.toLocaleString()}</td>
                <td>₹{order.balance.toLocaleString()}</td>
                <td>{order.deliveryDate || '-'}</td>
                <td>{order.deliveryStatus}</td>
                <td>
                  <button title="Edit">✏️</button>
                  <button title="Print">🖨️</button>
                  <button title="Delete" style={{ color: 'red' }}>❌</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer buttons */}
      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button>New</button>
        <button>Print</button>
        <button>Excel Export</button>
      </div>
    </div>
  );
};

export default AllOrders;

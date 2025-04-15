import React, { useState } from 'react';

const dieselData = [
  {
    slipNo: 'PREDRIVER',
    vehicleNo: 'CG 11 AK 4507',
    date: '2024-09-10',
    diesel: 80,
    rate: 98.23,
    debit: 7858.40,
    credit: 0,
    balance: 7858.40,
    driver: 'Driver',
  },
  {
    slipNo: '',
    vehicleNo: 'CG 11 AK 4507',
    date: '2024-09-12',
    diesel: 200,
    rate: 98.56,
    debit: 19712.00,
    credit: 0,
    balance: 27570.40,
    driver: 'Driver',
  },
  {
    slipNo: '',
    vehicleNo: 'CG 11 AK 4507',
    date: '2024-09-12',
    diesel: 200,
    rate: 98.99,
    debit: 19798.00,
    credit: 0,
    balance: 47368.40,
    driver: 'Staff',
  }
];

const Diesel = () => {
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    vehicleNo: '',
    station: '',
    driverName: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = dieselData.filter(item => {
    return (
      (filters.vehicleNo === '' || item.vehicleNo.includes(filters.vehicleNo)) &&
      (filters.driverName === '' || item.driver.includes(filters.driverName))
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Diesel Usage Report</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
        <input type="date" name="fromDate" value={filters.fromDate} onChange={handleChange} />
        <input type="date" name="toDate" value={filters.toDate} onChange={handleChange} />
        <input name="vehicleNo" placeholder="Vehicle No." value={filters.vehicleNo} onChange={handleChange} />
        <input name="station" placeholder="Station" value={filters.station} onChange={handleChange} />
        <input name="driverName" placeholder="Driver Name" value={filters.driverName} onChange={handleChange} />
        <button onClick={() => setFilters({ fromDate: '', toDate: '', vehicleNo: '', station: '', driverName: '' })}>Reset</button>
      </div>

      <table border="1" width="100%" cellPadding={6}>
        <thead style={{ background: '#f0f0f0' }}>
          <tr>
            <th>S.N</th>
            <th>Slip No</th>
            <th>Vehicle No.</th>
            <th>Date</th>
            <th>Diesel</th>
            <th>Rate</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Balance</th>
            <th>Driver Name</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.slipNo || '-'}</td>
              <td>{item.vehicleNo}</td>
              <td>{item.date}</td>
              <td>{item.diesel}</td>
              <td>{item.rate}</td>
              <td>₹{item.debit}</td>
              <td>₹{item.credit}</td>
              <td>₹{item.balance}</td>
              <td>{item.driver}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diesel;


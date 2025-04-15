import React, { useState } from 'react';

const Vehicle = () => {
  const [formData, setFormData] = useState({
    vehicleName: '',
    vehicleNo: '',
    chasisNo: '',
    engineNo: '',
    ownerName: '',
    ownerMobileNo: '',
    ownerAddress: '',
    ownerPanNo: '',
    note: '',
    amount: '',
    installmentDueDate: '',
    reminderDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      vehicleName: '',
      vehicleNo: '',
      chasisNo: '',
      engineNo: '',
      ownerName: '',
      ownerMobileNo: '',
      ownerAddress: '',
      ownerPanNo: '',
      note: '',
      amount: '',
      installmentDueDate: '',
      reminderDate: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Vehicle details saved successfully!");
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, border: '1px solid gray', borderRadius: 10 }}>
      <h2>New Vehicle Details</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Vehicle Name *', name: 'vehicleName' },
          { label: 'Vehicle No *', name: 'vehicleNo' },
          { label: 'Chasis No.', name: 'chasisNo' },
          { label: 'Engine No.', name: 'engineNo' },
          { label: 'Owner Name', name: 'ownerName' },
          { label: 'Owner Mobile No.', name: 'ownerMobileNo' },
          { label: 'Owner Address', name: 'ownerAddress' },
          { label: 'Owner PAN No.', name: 'ownerPanNo' }
        ].map(({ label, name }) => (
          <div key={name} style={{ marginBottom: 10 }}>
            <label>{label}</label><br />
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              style={{ width: '100%', padding: 8 }}
            />
          </div>
        ))}

        <h3>Installment Reminder</h3>
        {[
          { label: 'Note', name: 'note', type: 'text' },
          { label: 'Amount', name: 'amount', type: 'number' },
          { label: 'Installment Due Date', name: 'installmentDueDate', type: 'date' },
          { label: 'Reminder Date', name: 'reminderDate', type: 'date' }
        ].map(({ label, name, type }) => (
          <div key={name} style={{ marginBottom: 10 }}>
            <label>{label}</label><br />
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              style={{ width: '100%', padding: 8 }}
            />
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          <button type="submit">Save</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Vehicle;

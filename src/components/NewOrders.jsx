import React, { useState } from 'react';

const NewOrders = () => {
  const [form, setForm] = useState({
    biltiDate: '',
    biltiNo: '',
    biltiType: 'Credit',
    consignorName: '',
    consigneeName: '',
    fromCity: '',
    toCity: '',
    transporterName: 'ABC Transport',
    consignorMobile: '',
    consigneeMobile: '',
    consignorAddress: '',
    consigneeAddress: '',
    goodName: '',
    contents: '',
    quantity: '',
    fareAmt: '',
    status: 'Delivered',
    deliveryDate: '',
    remark: '',
    discount: 0,
    surcharge: 0,
    stCharge: 0,
    gst: 0,
    hemaliCharge: 0,
    paidAmount: 0
  });

  const [goodsList, setGoodsList] = useState([]);
  
  const totalFare = goodsList.reduce((sum, g) => sum + g.quantity * g.fareAmt, 0);
  const totalAmount = totalFare + +form.surcharge + +form.stCharge + +form.hemaliCharge;
  const dueAmount = totalAmount - +form.paidAmount;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addGood = () => {
    setGoodsList([...goodsList, {
      goodName: form.goodName,
      contents: form.contents,
      quantity: +form.quantity,
      fareAmt: +form.fareAmt
    }]);
    setForm({ ...form, goodName: '', contents: '', quantity: '', fareAmt: '' });
  };

  return (
    <div style={{ maxWidth: 1200, margin: 'auto', padding: 20 }}>
      <h2>New Order</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        <div><label>Bilti Date *</label><input name="biltiDate" type="date" value={form.biltiDate} onChange={handleChange} /></div>
        <div><label>Bilti No. *</label><input name="biltiNo" value={form.biltiNo} onChange={handleChange} /></div>
        <div><label>Bilti Type</label><select name="biltiType" value={form.biltiType} onChange={handleChange}><option>Credit</option><option>Cash</option></select></div>
        <div><label>Consignor's Name *</label><input name="consignorName" value={form.consignorName} onChange={handleChange} /></div>
        <div><label>Mobile No.</label><input name="consignorMobile" value={form.consignorMobile} onChange={handleChange} /></div>
        <div><label>Address</label><input name="consignorAddress" value={form.consignorAddress} onChange={handleChange} /></div>
        <div><label>Consignee's Name *</label><input name="consigneeName" value={form.consigneeName} onChange={handleChange} /></div>
        <div><label>Mobile No.</label><input name="consigneeMobile" value={form.consigneeMobile} onChange={handleChange} /></div>
        <div><label>Address</label><input name="consigneeAddress" value={form.consigneeAddress} onChange={handleChange} /></div>
        <div><label>From City</label><input name="fromCity" value={form.fromCity} onChange={handleChange} /></div>
        <div><label>To City</label><input name="toCity" value={form.toCity} onChange={handleChange} /></div>
        <div><label>Transporter Name</label><input name="transporterName" value={form.transporterName} onChange={handleChange} /></div>
      </div>

      <h3>Goods Information</h3>
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <input placeholder="Good Name" name="goodName" value={form.goodName} onChange={handleChange} />
        <input placeholder="Contents" name="contents" value={form.contents} onChange={handleChange} />
        <input placeholder="Quantity" name="quantity" type="number" value={form.quantity} onChange={handleChange} />
        <input placeholder="Fare Amt" name="fareAmt" type="number" value={form.fareAmt} onChange={handleChange} />
        <button type="button" onClick={addGood}>Add</button>
      </div>

      <table border="1" width="100%" cellPadding={5}>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Good Name</th>
            <th>Contents</th>
            <th>Quantity</th>
            <th>Fare Amt</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {goodsList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.goodName}</td>
              <td>{item.contents}</td>
              <td>{item.quantity}</td>
              <td>{item.fareAmt.toFixed(2)}</td>
              <td>{(item.quantity * item.fareAmt).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Billing</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        <input name="discount" placeholder="Discount %" value={form.discount} onChange={handleChange} />
        <input name="surcharge" placeholder="Sur. Charge" value={form.surcharge} onChange={handleChange} />
        <input name="stCharge" placeholder="ST Charge" value={form.stCharge} onChange={handleChange} />
        <input name="gst" placeholder="GST %" value={form.gst} onChange={handleChange} />
        <input name="hemaliCharge" placeholder="Hemali Charge" value={form.hemaliCharge} onChange={handleChange} />
        <input name="paidAmount" placeholder="Paid Amount" value={form.paidAmount} onChange={handleChange} />
        <input name="remark" placeholder="Remark" value={form.remark} onChange={handleChange} />
      </div>

      <h4>Summary</h4>
      <p><strong>Total Fare:</strong> ₹{totalFare.toFixed(2)}</p>
      <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
      <p><strong>Due Amount:</strong> ₹{dueAmount.toFixed(2)}</p>

      <div style={{ marginTop: 20 }}>
        <label>Status:</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Delivered</option>
          <option>Pending</option>
        </select>

        <label style={{ marginLeft: 20 }}>Delivery Date:</label>
        <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange} />
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <button>Update</button>
        <button>Print</button>
        <button>Preview</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default NewOrders;

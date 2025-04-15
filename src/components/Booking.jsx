import React from "react";

const Booking = () => {
  return (
    <div className="p-6 bg-white shadow-md max-w-[1200px] mx-auto text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label>Date *</label>
          <input type="date" className="border p-1 w-full" />
        </div>
        <div>
          <label>Consignor *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Bilti Type *</label>
          <select className="border p-1 w-full">
            <option value="">Select</option>
          </select>
        </div>
        <div>
          <label>Transporter Name</label>
          <input type="text" className="border p-1 w-full" />
        </div>

        <div>
          <label>LR No. *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Consignee *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>GP No.</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" className="border p-1 w-full" />
        </div>

        {/* Vehicle Details */}
        <div>
          <label>Vehicle No. *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Chasis No.</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Driver Name *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div>
          <label>Mobile No.</label>
          <input type="text" className="border p-1 w-full" />
        </div>

        {/* Owner Details */}
        <div className="col-span-2">
          <label>Owner Name</label>
          <input type="text" className="border p-1 w-full" />
        </div>
        <div className="col-span-2">
          <label>Address</label>
          <input type="text" className="border p-1 w-full" />
        </div>

        {/* Oil Details */}
        <div>
          <label>Date</label>
          <input type="date" className="border p-1 w-full" />
        </div>
        <div>
          <label>Type</label>
          <select className="border p-1 w-full">
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div>
          <label>Rate</label>
          <input type="number" className="border p-1 w-full" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" className="border p-1 w-full" />
        </div>

        <div>
          <label>Prev. Reading</label>
          <input type="number" className="border p-1 w-full" />
        </div>
        <div>
          <label>Current Reading</label>
          <input type="number" className="border p-1 w-full" />
        </div>
        <div className="col-span-2">
          <label>Station Address</label>
          <input type="text" className="border p-1 w-full" />
        </div>

        {/* Material Details */}
        <div className="col-span-4">
          <label>Material Details *</label>
          <input type="text" className="border p-1 w-full" />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-1">S.N.</th>
              <th className="border p-1">Material</th>
              <th className="border p-1">Contents</th>
              <th className="border p-1">Weight in MT</th>
              <th className="border p-1">Rate / MT</th>
              <th className="border p-1">Freight</th>
              <th className="border p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-1">1</td>
              <td className="border p-1">Cement</td>
              <td className="border p-1">500bag</td>
              <td className="border p-1">100000</td>
              <td className="border p-1">25</td>
              <td className="border p-1">2500000</td>
              <td className="border p-1 text-center">
                <button className="text-red-600">✖</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment and Summary */}
      <div className="grid grid-cols-2 mt-4 gap-4">
        <div>
          <label>Payment Type</label>
          <select className="border p-1 w-full">
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
          <label>Amount Paid</label>
          <input type="number" className="border p-1 w-full" defaultValue={25000} />
          <label>Due Amount</label>
          <input type="number" className="border p-1 w-full" defaultValue={2475000} />
          <label>Due Date</label>
          <input type="date" className="border p-1 w-full" />
        </div>

        <div className="text-right">
          <p>SubTotal: <strong>2,500,000.00</strong></p>
          <p>Discount (-): 0.00</p>
          <p>Other Charge: 0.00</p>
          <p>GST: 0.00</p>
          <p>Amount: 2,500,000.00</p>
          <p>Advance Amt: 0.00</p>
          <p className="text-lg font-bold text-blue-800">Total Amount: 2,500,000.00</p>
          <p>Paid Amt: 25,000.00</p>
          <p>Balance Amt: 2,475,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
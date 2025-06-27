import { useState } from "react";

const PaymentTerms = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Payment Terms</h1>
      <div className="text-14 text-light-1 lh-14">
        How and when do you want your guests to pay?
      </div>

      <div className="text-14 lh-14 fw-500 mt-10">
        Select number of payments
      </div>
      <div className="d-flex items-center gap-3">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={
                "rounded-8 px-30 text-30 lh-17 cursor-pointer border-blue-1 " +
                (index !== number ? "text-blue-1" : "bg-blue-1 text-white")
              }
              onClick={() => setNumber(index)}
            >
              {index + 1}
            </div>
          ))}
      </div>
      <div className="col-12 mt-10">
        <div className="text-14 lh-14 fw-500 mb-5">First Payment</div>
        <select
          className="border-light rounded-8 py-10 px-15 w-300 form-select"
          disabled={number === 0}
        >
          {number !== 0 ? (
            <option value="">First Payment</option>
          ) : (
            <option value="100">100%</option>
          )}
        </select>
        <div className="text-14 text-light-1 lh-14 mt-5">
          {number === 0 ? "100% due" : "Due"} when reservation is booked or
          reserved
        </div>
      </div>

      {number > 0 && (
        <div className="col-12 mt-10">
          <div className="text-14 lh-14 fw-500">Second Payment</div>
          <select
            className="border-light rounded-8 py-10 px-15 w-300 form-select mt-5"
            disabled={number === 1}
          >
            <option value="">Second Payment</option>
          </select>
          <select className="border-light rounded-8 py-10 px-15 w-300 form-select mt-10">
            <option value="">Days before check in</option>
          </select>
        </div>
      )}

      {number > 1 && (
        <div className="col-12 mt-10">
          <div className="text-14 lh-14 fw-500">Third Payment</div>
          <select
            className="border-light rounded-8 py-10 px-15 w-300 form-select mt-5"
            disabled={number === 2}
          >
            <option value="">Third Payment</option>
          </select>
          <select className="border-light rounded-8 py-10 px-15 w-300 form-select mt-10">
            <option value="">Days before check in</option>
          </select>
        </div>
      )}

      <div className="border-top-light mt-15 pt-15 d-flex justify-end gap-2">
        <button className="bg-white border-light rounded-8 px-15 py-5 text-14 fw-500">
          Cancel
        </button>
        <button className="text-white bg-blue-1 rounded-8 px-15 py-5 text-14">
          Save
        </button>
      </div>
    </div>
  );
};

export default PaymentTerms;

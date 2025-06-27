import { Checkbox } from "@mui/material";
import { useState } from "react";

const BaseRate = () => {
  const types = [
    { value: "day-night", label: "Per Day/Night", text: "night" },
    { value: "hour", label: "Per Hour", text: "hour" },
  ];
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [customRate, setCustomRate] = useState(false);
  const [bookingType, setBookingType] = useState(types[0]);

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Base rate</h1>
      <div className="text-16 lh-1">
        Define a bese rate so you are covered across your whole calendar year
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-1 fw-500">Amount per {bookingType.text}</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder={`Enter amount per ${bookingType.text}`}
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-1 fw-500">Booking Type:</h1>
        <select
          className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10"
          onChange={(event) => {
            setBookingType(
              types.find((type) => type.value === event.target.value)
            );
          }}
        >
          {types.map((type) => (
            <option value={type.value} key={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 d-flex items-center gap-3 mr-10 col-12">
        <div className="d-flex items-center flex-shrink-0">
          <Checkbox
            className="px-0 py-0"
            checked={customRate}
            onChange={() => setCustomRate(!customRate)}
          />
          <div className="text-16 lh-1 fw-500">Customize by {bookingType.text} of week</div>
        </div>
      </div>

      {customRate &&
        weekDays.map((day) => (
          <div className="col-sm-6 mt-5">
            <h1 className="text-14 lh-1 fw-500">{day} {bookingType.text} rate</h1>
            <input
              className="border-light rounded-8 py-5 px-15 w-full mt-10"
              type="text"
              placeholder={`Enter ${day} ${bookingType.text} rate`}
            />
          </div>
        ))}

      <div className="border-top-light mt-10"></div>

      <h1 className="text-20 lh-1 fw-600">Base Discounts</h1>
      <div className="text-16 lh-1">
        Set up discounts that encourage longer stays
      </div>

      <div className="col-12">
        <div className="w-300 mt-5">
          <h1 className="text-14 lh-1 fw-500">
            Weekly discount
            <span className="text-light-1 fw-400 ml-5">(7 nights or more)</span>
          </h1>
          <div className="d-flex items-center mt-5">
            <div className="position-relative d-flex items-center mr-10">
              <input
                type="number"
                step="0.01"
                min={0}
                placeholder="Enter amount"
                className="border-light bg-white rounded-8 px-10 py-5 pr-30"
              />
              <span
                className="text-light-1 position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                %
              </span>
            </div>
            <div>
              <div className="text-10 lh-14 fw-400 text-light-1">
                Avg per week
              </div>
              <div className="text-14 lh-14 fw-500 text-green-3">$1,260</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="w-300 mt-5">
          <h1 className="text-14 lh-1 fw-500">
            Monthly discount
            <span className="text-light-1 fw-400 ml-5">
              (20 nights or more)
            </span>
          </h1>
          <div className="d-flex items-center mt-5">
            <div className="position-relative d-flex items-center mr-10">
              <input
                type="number"
                step="0.01"
                min={0}
                placeholder="Enter amount"
                className="border-light bg-white rounded-8 px-10 py-5 pr-30"
              />
              <span
                className="text-light-1 position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                %
              </span>
            </div>
            <div>
              <div className="text-10 lh-14 fw-400 text-light-1">
                Avg per month
              </div>
              <div className="text-14 lh-14 fw-500 text-green-3">$4,760</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top-light mt-10"></div>
      <h1 className="text-20 lh-1 fw-600">New listing discount</h1>
      <div className="col-8 px-15 py-15 bg-light-2 rounded-8 mt-5">
        <div className="text-15 fw-500 lh-14">
          You're offering 20% off your first three bookings
        </div>
        <div className="text-14 lh-14 mt-10">
          This discount will be active for 90 days or until you get three
          bookings-whichever comes first
        </div>
        <div className="text-14 lh-14 mt-10">Discount expires:</div>
        <div className="text-18 fw-600 lh-14">Aug 2, 2025</div>
      </div>

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

export default BaseRate;

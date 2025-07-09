"use client";

import svgIcon from "@/components/data/svgIcon";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const index = ({ isTravelPackage = false }) => {
  const [date, setDate] = useState(new DateObject());
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(1, "month"),
  ]);
  const [starRating, setStarRating] = useState(0);

  return (
    <div
      className={
        isTravelPackage ? "" : "py-20 px-20 rounded-8 bg-white shadow-3"
      }
    >
      {!isTravelPackage && (
        <>
          <h1 className="text-30 lh-14 fw-600">Rides Search</h1>
          <div className="text-15 text-light-1">
            Find the perfect ride for your client
          </div>
        </>
      )}
      <div className="row x-gap-10 y-gap-10 mt-10">
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1 className="text-14 lh-12 fw-500">Pickup Location</h1>
          <div className="position-relative d-flex items-center mt-10">
            <input
              type="text"
              placeholder="Airport, hotel or address"
              className="border-light bg-white rounded-8 px-10 py-5 h-50 pl-30"
            />
            <span
              className="text-light-1 position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {svgIcon.location_picker}
            </span>
          </div>
        </div>
        
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1 className="text-14 lh-12 fw-500">Dropoff Location</h1>
          <div className="position-relative d-flex items-center mt-10">
            <input
              type="text"
              placeholder="Airport, hotel or address"
              className="border-light bg-white rounded-8 px-10 py-5 h-50 pl-30"
            />
            <span
              className="text-light-1 position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {svgIcon.location_picker}
            </span>
          </div>
        </div>        

        <div className="col-sm-4 mt-10">
          <h1 className="text-14 lh-14 fw-500">Date</h1>
          <div className="border-light rounded-8 py-10 px-20 w-full mt-10 cursor-text text-gray-900 bg-white">
            <DatePicker
              inputClass="custom_input-picker"
              containerClassName="custom_container-picker"
              value={date}
              onChange={setDate}
              numberOfMonths={1}
              offsetY={10}
              format="MMMM DD"
            />
          </div>
        </div>
        {/* <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Check-in</h1>
          <div className="mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                slotProps={{
                  textField: {
                    sx: {
                      width: "100%",
                      "& .MuiPickersInputBase-root": { height: 50 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Check-out</h1>
          <div className="mt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                slotProps={{
                  textField: {
                    sx: {
                      width: "100%",
                      "& .MuiPickersInputBase-root": { height: 50 },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div> */}
        
        <div className="col-sm-4 mt-10">
          <h1 className="text-14 lh-12 fw-500">Price Range</h1>
          <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
            <option defaultValue>Any price</option>
          </select>
        </div>
        <div className="col-sm-4 mt-10">
          <h1 className="text-14 lh-12 fw-500">Star Rating</h1>
          <div className="d-flex items-center gap-1 mt-10">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <span
                  className="text-20 text-yellow-1 lh-14 cursor-pointer"
                  onClick={() => setStarRating(index + 1)}
                >
                  {index < starRating ? "★" : "☆"}
                </span>
              ))}
          </div>
        </div>
        {!isTravelPackage && (
          <div className="col-12 mt-10">
            <button className="bg-blue-1 text-white rounded-8 py-10 px-20 w-100 fw-500 text-14">
              <i className="icon icon-search"></i> Search Rides
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;

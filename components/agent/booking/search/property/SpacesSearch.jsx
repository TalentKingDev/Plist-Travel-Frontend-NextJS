"use client";

import svgIcon from "@/components/data/svgIcon";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const index = () => {
  const [starRating, setStarRating] = useState(0);
  const [bookingType, setBookingType] = useState("day-night");

  return (
    <div className="py-20 px-20 rounded-8 bg-white shadow-3">
      <h1 className="text-30 lh-14 fw-600">Spaces Search</h1>
      <div className="text-15 text-light-1">Find spaces for your client</div>
      <div className="row x-gap-10 y-gap-10 mt-10">
        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Location</h1>
          <div className="position-relative d-flex items-center mt-10">
            <input
              type="text"
              placeholder="City, region, or property"
              className="border-light bg-white rounded-8 px-10 h-45 pl-30"
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
        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Category</h1>
          <select className="form-select rounded-8 border-light px-15 h-45 justify-between text-16 fw-400 w-full text-12 mt-10">
            <option defaultValue>Any type</option>
          </select>
        </div>
        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Subcategory</h1>
          <select className="form-select rounded-8 border-light px-15 h-45 justify-between text-16 fw-400 w-full text-12 mt-10">
            <option defaultValue>Any type</option>
          </select>
        </div>

        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Booking Type:</h1>
          <select
            className="form-select rounded-8 border-light px-15 h-45 justify-between text-16 fw-400 w-full text-12 mt-10"
            onChange={(e) => setBookingType(e.target.value)}
          >
            <option value="day-night">Per Day/Night</option>
            <option value="hour">Per Hour</option>
          </select>
        </div>
        {["Check-in", "Check-out"].map((label) => (
          <div className="col-sm-4 mt-5" key={label}>
            <h1 className="text-14 lh-12 fw-500">{label}</h1>
            <div className="mt-10">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {bookingType === "hour" ? (
                  <DateTimePicker
                    slotProps={{
                      textField: {
                        sx: {
                          width: "100%",
                          "& .MuiPickersInputBase-root": { height: 45 },
                        },
                      },
                    }}
                  />
                ) : (
                  <DatePicker
                    slotProps={{
                      textField: {
                        sx: {
                          width: "100%",
                          "& .MuiPickersInputBase-root": { height: 45 },
                        },
                      },
                    }}
                  />
                )}
              </LocalizationProvider>
            </div>
          </div>
        ))}

        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Price Range</h1>
          <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
            <option defaultValue>Any price</option>
          </select>
        </div>

        <div className="col-sm-4 mt-5">
          <h1 className="text-14 lh-12 fw-500">Guests</h1>
          <div className="position-relative d-flex items-center mt-10">
            <select className="form-select rounded-8 border-light pl-30 pr-20 py-10 justify-between text-16 fw-400 w-full text-12">
              <option defaultValue>1 Guest</option>
            </select>
            <span
              className="text-light-1 position-absolute"
              style={{
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {svgIcon.users}
            </span>
          </div>
        </div>

        <div className="col-sm-4 mt-5">
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
        <div className="col-12 mt-10">
          <button className="bg-blue-1 text-white rounded-8 py-10 px-20 w-100 fw-500 text-14">
            <i className="icon icon-search"></i> Search Spaces
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;

"use client";

import svgIcon from "@/components/data/svgIcon";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";

const index = ({ isTravelPackage = false }) => {
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(1, "month"),
  ]);
  const [starRating, setStarRating] = useState(0);

  return (
    <>
      <div
        className={
          isTravelPackage ? "" : "py-20 px-20 rounded-8 bg-white shadow-3"
        }
      >
        {!isTravelPackage && (
          <>
            <h1 className="text-30 lh-14 fw-600">Activities Search</h1>
            <div className="text-15 text-light-1">
              Find the perfect activity for your client
            </div>
          </>
        )}
        <div className="row x-gap-10 y-gap-10 mt-10">
          <div className="col-sm-4 mt-5">
            <h1 className="text-14 lh-12 fw-500">Location</h1>
            <div className="position-relative d-flex items-center mt-10">
              <input
                type="text"
                placeholder="City, region, or property"
                className="border-light bg-white rounded-8 px-10 py-5 h-45 pl-30"
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
            <h1 className="text-14 lh-12 fw-500">Duration</h1>
            <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
              <option defaultValue>Select duration</option>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
              <option value="11">11 hours</option>
              <option value="12">12 hours</option>
              <option value="13">13 hours</option>
              <option value="14">14 hours</option>
              <option value="15">15 hours</option>
              <option value="16">16 hours</option>
              <option value="17">17 hours</option>
              <option value="18">18 hours</option>
            </select>
          </div>
          <div className="col-sm-4 mt-5">
            <h1 className="text-14 lh-12 fw-500">Age/Skill Requirements</h1>
            <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
              <option defaultValue>18+ only</option>
            </select>
          </div>
          <div className="col-sm-4 mt-5">
            <h1 className="text-14 lh-12 fw-500">Category</h1>
            <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
              <option defaultValue>Any type</option>
            </select>
          </div>
          <div className="col-sm-4 mt-5">
            <h1 className="text-14 lh-12 fw-500">Subcategory</h1>
            <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
              <option defaultValue>Any type</option>
            </select>
          </div>
          <div className="col-sm-4 mt-5">
            <h1 className="text-14 lh-12 fw-500">Price Range</h1>
            <select className="form-select rounded-8 border-light px-20 py-10 justify-between text-16 fw-400 w-full text-12 mt-10">
              <option defaultValue>Any price</option>
            </select>
          </div>
          <div className="col-12 mt-5">
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
                <i className="icon icon-search"></i> Search Activities
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default index;

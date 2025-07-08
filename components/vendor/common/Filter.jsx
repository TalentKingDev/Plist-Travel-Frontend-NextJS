import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const Filter = ({ agent = false }) => {
  const [startDate, setStartDate] = useState(new DateObject());
  const [endDate, setEndDate] = useState(new DateObject());

  return (
    <div className="row y-gap-10 x-gap-10 items-center mb-5 mt-10">
      {/* <div className="col-sm-auto d-flex">
              <div className="position-relative d-flex items-center w-180 sm:w-full">
                <input
                  type="text"
                  placeholder="Search listings..."
                  className="border-light bg-white rounded-8 px-10 py-5 pl-30"
                />
                <i
                  className="icon-search text-light-1 position-absolute"
                  style={{
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></i>
              </div>
            </div> */}
      <div className="col-sm-auto">
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="scheduled">Scheduled</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <div className="col-sm-auto">
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
          <option value="all">Category</option>
        </select>
      </div>
      <div className="col-sm-auto">
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 text-14 w-140 sm:w-full">
          <option value="all">Sub Category</option>
        </select>
      </div>
      <div className="col-sm-auto">
        <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 bg-white">
          <DatePicker
            inputClass="custom_input-picker"
            containerClassName="custom_container-picker"
            value={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            numberOfMonths={1}
            offsetY={10}
            format="MMMM DD"
          />
        </div>
      </div>
      <div className="col-sm-auto">
        <div className="border-light rounded-8 py-10 px-20 w-full cursor-text text-light-1 bg-white">
          <DatePicker
            inputClass="custom_input-picker"
            containerClassName="custom_container-picker"
            value={endDate}
            onChange={(date) => {
              setEndDate(date);
            }}
            numberOfMonths={1}
            offsetY={10}
            format="MMMM DD"
          />
        </div>
      </div>

      <div className="col-sm-auto">
        <select className="form-select rounded-8 border-light justify-between py-10 px-15 w-140 sm:w-full text-14">
          <optgroup label="Property List">
            <option value="hotel">Hotel</option>
            <option value="vacation">Vacation Rental</option>
            <option value="venue">Event Venue</option>
            <option value="spaces">Spaces</option>
          </optgroup>
          <optgroup label="Non-Property List">
            <option value="tour">Tour</option>
            <option value="activity">Activity</option>
            <option value="event">Event</option>
            {agent && (
              <>
                <option value="flight">Flight</option>
                <option value="rides">Rides</option>
              </>
            )}
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default Filter;

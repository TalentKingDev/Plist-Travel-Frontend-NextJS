import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import CancellationPolicy from "../../../common/CancellationPolicy";
import { Add, Remove } from "@mui/icons-material";

const ListingDetails = ({ bookingType }) => {
  const [days, setDays] = useState(1);
  const [isMultiDay, setIsMultiDay] = useState(false);

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-14 fw-600">Listing Details</h1>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">What to Bring/Wear</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Yoga mat, comfortable clothing"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Age Restriction</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select age restriction</option>
          <option value="18+">18+ only</option>
        </select>
      </div>

      <div className="col-12 mt-10 px-10">
        <div className="row x-gap-10 y-gap-10 border-light items-end rounded-8 py-10 px-10 w-full">
          <div className="d-flex items-center gap-2">
            <Checkbox
              className="px-0 py-0"
              value={isMultiDay}
              onChange={(e) => setIsMultiDay(e.target.checked)}
            />
            <div className="text-14 lh-12 fw-500">Multi-Day Activity</div>
            {isMultiDay && (
              <div className="d-flex items-center">
                <Remove
                  className="px-0 py-0"
                  onClick={() => setDays(Math.max(1, days - 1))}
                />
                <Add className="px-0 py-0" onClick={() => setDays(days + 1)} />
              </div>
            )}
          </div>
          {Array(days)
            .fill(null)
            .map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="col-md-3 col-sm-6">
                  <div className="col-12 text-14 lh-12 fw-500">
                    Day {idx + 1}:
                  </div>
                  <h1 className="text-14 lh-12 fw-500">Activity Date</h1>
                  <input
                    className="border-light rounded-8 py-5 px-15 w-full"
                    type="date"
                  />
                </div>

                <div className="col-md-3 col-sm-6">
                  <h1 className="text-14 lh-12 fw-500">Duration</h1>
                  <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full">
                    <option defaultValue>Select duration</option>
                    <option value="1">1 hour</option>
                    {Array(23)
                      .fill(null)
                      .map((_, index) => (
                        <option value={index + 2}>{index + 2} hours</option>
                      ))}
                  </select>
                </div>

                <div className="col-md-3 col-sm-6">
                  <h1 className="text-14 lh-12 fw-500">Activity Start Time</h1>
                  <input
                    className="border-light rounded-8 py-5 px-15 w-full"
                    type="time"
                  />
                </div>

                <div className="col-md-3 col-sm-6">
                  <h1 className="text-14 lh-12 fw-500">Activity End Time</h1>
                  <input
                    className="border-light rounded-8 py-5 px-15 w-full"
                    type="time"
                  />
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Special Offers</h1>
        <div className="text-12 text-light-1 lh-1 mt-5">
          Any special offers or discounts available.
        </div>
        <select
          className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10"
          onChange={(e) => {
            if (e.target.value == "new-offer") {
              router.push("/vendor/coupon");
            }
          }}
        >
          <option defaultValue>Select special offers</option>
          <option value="new-offer">
            Link to Coupon List to create a new special offer
          </option>
        </select>
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Parking Info</h1>
        <div className="text-12 text-light-1 lh-1 mt-5">
          Information about parking availability.
        </div>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Free parking available, shuttle service provided"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Instructor/Host Name</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Emily Brown"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Detail about Instructor/Host</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Certified yoga teacher"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">COVID/Safety Guidelines</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="i.e. Masks required, social distancing enforced"
        />
      </div>

      <div className="col-12 mt-5 border-bottom-light pb-10">
        <h1 className="text-14 lh-12 fw-500">Insurance/Cancellation Policy</h1>
        <CancellationPolicy />
      </div>

      <div className="col-12 mt-10">
        <div className="d-flex items-center gap-1">
          <Checkbox className="px-0 py-0" />
          <h1 className="text-14 lh-12 fw-500">Accessibility Features</h1>
        </div>
        <textarea
          rows={2}
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Describe Accessibility"
        />
      </div>
    </div>
  );
};

export default ListingDetails;

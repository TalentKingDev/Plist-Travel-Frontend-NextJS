import { Checkbox, Dialog, Radio } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CancellationPolicy from "../../../common/CancellationPolicy";

const ListingDetails = ({ bookingType }) => {
  const router = useRouter();
  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-14 fw-600">Listing Details</h1>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Size in m2</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter property size"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Event Maximum Capacity</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter maximum capacity for the event"
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Event Date</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="date"
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Duration</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
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

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Event Start Time</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="time"
        />
      </div>
      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Event End Time</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="time"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Performer/Speaker Info</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Performers: The Rock Band, DJ Mike"
        />
      </div>

      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Age Restriction</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select age restriction</option>
          <option value="18+">18+ only</option>
        </select>
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
        <h1 className="text-14 lh-12 fw-500">COVID/Safety Guidelines</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="i.e. Masks required, social distancing enforced"
        />
      </div>

      <div className="col-12 mt-5 border-bottom-light pb-10">
        <h1 className="text-14 lh-12 fw-500">Cancellation Policy</h1>
        <CancellationPolicy />
      </div>

      <div className="col-12 mt-10">
        <div className="d-flex items-center gap-1">
          <Checkbox className="px-0 py-0" />
          <h1 className="text-14 lh-12 fw-500">Accessibility Info</h1>
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

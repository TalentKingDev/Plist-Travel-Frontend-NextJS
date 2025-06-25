import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import CancellationPolicy from "../../../common/CancellationPolicy";
import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const ListingDetails = ({ bookingType }) => {
  const [days, setDays] = useState(1);
  const [isMultiDay, setIsMultiDay] = useState(false);

  const router = useRouter();
  const [itineraries, setItineraries] = useState(1);

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-14 fw-600">Listing Details</h1>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Group Size Limit</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="number"
          min={1}
          placeholder="The maximum number of participants allowed."
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Inclusions</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select inclusions</option>
          <option value="guide">Guide</option>
          <option value="entrance-fees">Entrance fees</option>
        </select>
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Exclusions</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full mt-10">
          <option defaultValue>Select exclusions</option>
          <option value="meals">Meals</option>
          <option value="transportation">Transportation</option>
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
            <div className="text-14 lh-12 fw-500">Multi-Day Tour</div>
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
                  <h1 className="text-14 lh-12 fw-500">Tour Date</h1>
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
                  <h1 className="text-14 lh-12 fw-500">Tour Start Time</h1>
                  <input
                    className="border-light rounded-8 py-5 px-15 w-full"
                    type="time"
                  />
                </div>

                <div className="col-md-3 col-sm-6">
                  <h1 className="text-14 lh-12 fw-500">Tour End Time</h1>
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
        <h1 className="text-14 lh-12 fw-500">Safety Guidelines</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="i.e. Masks required, social distancing enforced"
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Guide Name</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Sarah Johnson"
        />
      </div>

      <div className="col-sm-3 mt-5">
        <h1 className="text-14 lh-12 fw-500">Detail about Guide</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Experienced historian"
        />
      </div>

      <h1 className="text-14 lh-12 fw-500 mt-5">
        Itinerary Details
        <Remove
          className="ml-10"
          onClick={() => setItineraries(Math.max(1, itineraries - 1))}
        />
        <Add onClick={() => setItineraries(itineraries + 1)} />
      </h1>
      {Array(itineraries)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            <div className="col-sm-6">
              <select className="form-select rounded-8 border-light px-15 py-10 justify-between text-14 w-full">
                <option defaultValue>Select Itinerary Type</option>
                <option value="historic-landmarks">Historic Landmarks</option>
                <option value="museums">Museums</option>
                <option value="parks">Parks</option>
              </select>
            </div>
            <div className="col-sm-6">
              <input
                className="border-light rounded-8 py-5 px-15 w-full"
                type="text"
                placeholder="Enter Itinerary Details"
              />
            </div>
          </React.Fragment>
        ))}

      <div className="col-12 mt-5 border-bottom-light pb-10">
        <h1 className="text-14 lh-12 fw-500">Cancellation Policy</h1>
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

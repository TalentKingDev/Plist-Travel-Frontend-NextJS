import { Checkbox, Dialog, Radio } from "@mui/material";
import { useState } from "react";

const ListingDetails = ({ bookingType }) => {
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
        <h1 className="text-14 lh-12 fw-500">Check-in hour</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="time"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Check-out hour</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="time"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Late Check-in</h1>
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
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Early bird tickets: $40"
        />
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

const CancellationPolicy = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const [policyName, setPolicyName] = useState("");
  const [policies, setPolicies] = useState([
    "Flexible until 1 day before arrival",
  ]);
  const [selectedPolicy, setSelectedPolicy] = useState(0);
  const [cancelAbility, setCancelAbility] = useState(false);
  const [cancellationPeriod, setCancellationPeriod] = useState("1 day");
  const [postpayGuarantee, setPostpayGuarantee] = useState("100%");

  return (
    <>
      <div className="text-12 text-light-1 lh-14">
        If there is no suitable cancellation policy for you, you can
        <span
          className="text-blue-1 ml-5 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          modify new
        </span>
      </div>
      {policies.map((policy, index) => (
        <div className="d-flex items-center gap-2 mt-5" key={index}>
          <Radio
            checked={selectedPolicy === index}
            onClick={() => setSelectedPolicy(index)}
            className="px-0 py-0"
          />
          <div className="text-14 lh-14">{policy}</div>
        </div>
      ))}
      <Dialog
        open={showModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-title"
      >
        <div className="px-20 py-20" style={{ width: "500px" }}>
          <h1 className="text-20 fw-500 mb-10">Cancellation Policy</h1>
          <div className="text-12 text-light-1 lh-14 mb-10">
            Cancellation time is calculated from 23:59 (local time zone) on the
            check-in date. If the check-in date is May 20, 2025, and guests can
            apply free cancellation 1 day before the check-in date, then guests
            can cancel the reservation for free before 23:59 2025-5-19.
          </div>

          <div className="text-14 fw-500 mt-10">
            Can the guest cancel for free within certain period?
          </div>
          <div className="d-flex items-center mt-5">
            <Radio
              checked={!cancelAbility}
              className="px-0 py-0"
              onClick={() => setCancelAbility(false)}
            />
            <div className="text-14 lh-14 ml-5">No</div>
          </div>
          <div className="d-flex items-center mt-5">
            <Radio
              checked={cancelAbility}
              className="px-0 py-0"
              onClick={() => setCancelAbility(true)}
            />
            <div className="text-14 lh-14 ml-5">Yes</div>
          </div>

          {cancelAbility && (
            <>
              <div className="text-14 fw-500 mt-10">
                How long in advance can the guest cancel for free?
              </div>
              <select
                className="form-select px-10 py-10 w-full text-14 mt-5"
                onChange={(event) => setCancellationPeriod(event.target.value)}
              >
                <option value="1 day">
                  23:59 on the day 1 day prior to check-in
                </option>
                <option value="2 days">
                  23:59 on the day 2 days prior to check-in
                </option>
              </select>

              <div className="text-14 fw-500 lh-14 mt-10">
                How much money will be deducted if the guest cancels after the
                free cancellation period?
              </div>
              <select
                className="form-select px-10 py-10 w-full text-14 mt-5"
                onChange={(event) => setPostpayGuarantee(event.target.value)}
              >
                <option value="100%">100% of the total rate</option>
                <option value="80%">80% of the total rate</option>
              </select>
              <div className="text-12 text-light-1 lh-14 mt-5">
                For postpay rate plans, the guarantee must be processed in
                accordance with the cancellation policy
              </div>
            </>
          )}

          <div className="text-14 fw-500 lh-14 mt-10">
            Cancellation Policy Name
          </div>
          <input
            className="text-14 border-light rounded-8 bg-white px-10 py-5 mt-5"
            placeholder="Enter cancellation policy name"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
          />

          <div className="bg-light-2 rounded-8 py-10 px-15 mt-10 mb-10">
            <div className="text-14 fw-500 lh-14">Preview</div>
            <div className="text-12 fw-500 lh-14 mt-5">Cancellation Policy</div>
            {cancelAbility ? (
              <>
                <div className="text-12 lh-14 mt-5">
                  &middot; The reservation can be canceled for free until 23:59,{" "}
                  {cancellationPeriod} before check-in
                </div>
                <div className="text-12 lh-14 mt-5">
                  &middot; If the reservation is canceled after 23:59,{" "}
                  {cancellationPeriod} before check-in, {postpayGuarantee} of
                  the booking total will be charged
                </div>
                <div className="text-12 fw-500 lh-14 mt-5">
                  Post pay guarantee policy (pre-pay rate plans can ignore)
                </div>
                <div className="text-12 lh-14 mt-5">
                  &middot; For postpay rate plans, the guarantee must be
                  processed in accordance with the cancellation policy
                </div>
                <div className="text-12 fw-500 lh-14 mt-5">No show</div>
                <div className="text-12 lh-14 mt-5">
                  &middot; If the guest is a no show, they will be charged in
                  accordance with the cancellation policy.
                </div>
              </>
            ) : (
              <div className="text-12 lh-14 mt-5">
                Guests can't cancel for free.
              </div>
            )}
          </div>

          <div className="d-flex justify-end gap-2">
            <button
              className="text-14 border-light rounded-8 px-10 py-5"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="text-14 bg-blue-1 text-white fw-500 rounded-8 px-10 py-5"
              onClick={() => {
                setPolicies([...policies, policyName]);
                setPolicyName("");
                setShowModal(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ListingDetails;

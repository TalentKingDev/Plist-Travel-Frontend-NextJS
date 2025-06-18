import { Dialog, Radio } from "@mui/material";
import { useState } from "react";

const ListingDetails = ({ bookingType }) => {
  const [rooms, setRooms] = useState(1);

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
        <h1 className="text-14 lh-12 fw-500">Living Rooms</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter number of living rooms"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Number of Bedrooms</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter number of bedrooms"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Number of Bathrooms</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter number of bathrooms"
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
        <h1 className="text-14 lh-12 fw-500">Outdoor facilities</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter outdoor facilities"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Extra People</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter number of extra people allowed"
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Availability</h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Enter availability"
        />
      </div>
      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">
          What’s the shortest number of nights travelers can book?
        </h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="number"
          placeholder="Enter Minimum Stay"
        />
        <div className="text-12 text-light-1 lh-1 mt-5">
          We suggest 3 or less for more bookings
        </div>
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">
          How many {bookingType == "hour" ? "hours" : "days"} before check-in
          will you accept bookings?
        </h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder={
            (bookingType == "hour" ? "Hours" : "Days") + " before check-in"
          }
        />
      </div>
      <div className="col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">
          How many months before check-in will you accept bookings?
        </h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Months before check-in"
        />
      </div>
      <div className="col-12 mt-5 border-bottom-light pb-10">
        <h1 className="text-14 lh-12 fw-500">Cancellation Policy</h1>
        <CancellationPolicy />
      </div>

      <h1 className="text-18 mt-10 lh-12 fw-500">House Rule</h1>
      <div className="col-md-3 col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Smoking Allowed</h1>
        <div className="form-radio">
          <div className="radio d-flex items-center">
            <input type="radio" name="smoking-allowed" value={true} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">Yes</div>
          </div>
          <div className="radio d-flex items-center ml-20">
            <input type="radio" name="smoking-allowed" value={false} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">No</div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Party Allowed</h1>
        <div className="form-radio">
          <div className="radio d-flex items-center">
            <input type="radio" name="party-allowed" value={true} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">Yes</div>
          </div>
          <div className="radio d-flex items-center ml-20">
            <input type="radio" name="party-allowed" value={false} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">No</div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Pets Allowed</h1>
        <div className="form-radio">
          <div className="radio d-flex items-center">
            <input type="radio" name="pets-allowed" value={true} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">Yes</div>
          </div>
          <div className="radio d-flex items-center ml-20">
            <input type="radio" name="pets-allowed" value={false} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">No</div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">Children Allowed</h1>
        <div className="form-radio">
          <div className="radio d-flex items-center">
            <input type="radio" name="children-allowed" value={true} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">Yes</div>
          </div>
          <div className="radio d-flex items-center ml-20">
            <input type="radio" name="children-allowed" value={false} />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">No</div>
          </div>
        </div>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Other rules</h1>
        <textarea
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder="Extra rule will be mentioned here"
        />
        <div className="form-checkbox d-flex items-center">
          <input type="checkbox" name="name" />
          <div className="form-checkbox__mark">
            <div className="form-checkbox__icon icon-check" />
          </div>
          <div className="text-14 fw-500 ml-10">Allow Instant Booking</div>
        </div>
      </div>
    </div>
  );
};

const RoomImageForm = () => {
  return (
    <div className="row y-gap-10 x-gap-10 items-end">
      <div className="col-sm-4 mt-5">
        <h1 className="text-14 lh-1 fw-500">Room Type</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between w-full mt-10">
          <option defaultValue>Select room type</option>
        </select>
      </div>
      <div className="col-sm-4 mt-5">
        <h1 className="text-14 lh-1 fw-500">Person</h1>
        <select className="form-select rounded-8 border-light px-15 py-10 justify-between w-full mt-10">
          <option defaultValue>Select occupancy</option>
        </select>
      </div>
      <div className="col-sm-4">
        <div className="border-light rounded-8 py-10 px-15 text-center text-13 fw-500">
          Image Upload
        </div>
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

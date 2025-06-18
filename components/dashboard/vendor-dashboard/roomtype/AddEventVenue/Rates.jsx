import { useState } from "react";
import { Checkbox, Radio } from "@mui/material";

const Rates = ({ bookingType }) => {
  const [activeOption, setActiveOption] = useState(1);
  const discountOptions = [
    {
      id: 1,
      value: "yes",
      label: "Yes, add a discount",
      description:
        "When the discount is no longer active your base rate will return to the original amount.",
    },
    {
      id: 2,
      value: "no",
      label: "No, don't add a discount",
      description: "You can add this discount later if you change your mind.",
    },
  ];

  return (
    <div className="row y-gap-10 x-gap-10">
      <h1 className="text-20 lh-1 fw-600">Set your rates to be competitive</h1>
      <div className="text-14 text-light-1 lh-1">
        We’re here to help you build your business. Check similar listings in
        your area if you’re not sure what to charge for rates and fees—you can
        always update these after you’re live.
      </div>

      <div className="col-md-6 mt-5">
        <h1 className="text-14 lh-12 fw-500">
          Pricing
        </h1>
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type="text"
          placeholder={
            (bookingType === "day-night" ? "Night" : "Hour") + "ly base rate"
          }
        />
        <div className="text-12 text-light-1 lh-1 mt-5">
          To attract travelers, it’s best to charge a lower nightly rate than
          competitors in your area. You can update your rates at any time.
        </div>
      </div>

      <div className="col-12 mt-5">
        <h1 className="text-14 lh-12 fw-500">Special Offers</h1>
        <div className="text-12 text-light-1 lh-1 mt-5">
          Any special offers or discounts available.
        </div>
        <div className="text-blue-1 underline text-12 lh-1 mt-5 mb-10">
          Learn more about managing discounts
        </div>
        {discountOptions.map((option, index) => (
          <div className="d-flex items-end mt-5" key={index}>
            <Radio
              className="flex-shrink-0"
              checked={activeOption === option.id}
              onChange={() => setActiveOption(option.id)}
              name="discount-option"
              value={option.id}
            />
            <div className="flex-grow-1">
              <div className="text-14 fw-500 lh-1">{option.label}</div>
              <div className="text-12 text-light-1 lh-1 mt-5">
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-top-light mt-10"></div>
      <h1 className="text-20 lh-1 fw-600">Now, set up your fees</h1>
      <div className="text-14 text-light-1 lh-1">
        Keeping your fees low can help increase your booking chances. You’ll be
        able to add other fees later.
      </div>

      <h1 className="text-14 lh-12 fw-500 mt-5 py-0">Cleaning Fee</h1>
      <div className="text-12 text-light-1 lh-1 mt-5 py-0">
        A high cleaning fee could prevent travelers from booking. This shouldn’t
        be more than the actual cost of cleaning your place.
      </div>
      <div className="col-sm-6">
        <input
          className="border-light rounded-8 py-5 px-15 w-full"
          type="text"
          placeholder="Amount $"
        />
      </div>
      <div className="col-sm-6">
        <select className="form-select rounded-8 border-light justify-between text-14 py-10 px-20 w-full text-14">
          <option value="">Choose Fee Type</option>
        </select>
      </div>

      <h1 className="text-14 lh-12 fw-500 mt-5 py-0">Pet Fee</h1>
      <div className="text-12 text-light-1 lh-1 mt-5 py-0">
        A high pet fee could prevent travelers from booking. Check other
        listings in your area if you’re not sure what to charge.
      </div>
      <div className="col-sm-6">
        <input
          className="border-light rounded-8 py-5 px-15 w-full"
          type="text"
          placeholder="Amount $"
        />
      </div>
      <div className="col-sm-6">
        <select className="form-select rounded-8 border-light justify-between text-14 py-10 px-20 w-full text-14">
          <option value="">Choose Fee Type</option>
        </select>
      </div>

      <h1 className="text-14 lh-12 fw-500 mt-10 py-0">Terms and conditions</h1>
      <div className="d-flex items-center">
        <Checkbox className="px-0 py-0" />
        <div className="text-14 lh-1 ml-5">
          I agree to the
          <span className="text-blue-1 underline ml-5 mr-5">
            Vrbo Accommodation Fee Collection Agreement
          </span>
          <span className="text-red-1">*</span>
        </div>
      </div>
    </div>
  );
};

export default Rates;

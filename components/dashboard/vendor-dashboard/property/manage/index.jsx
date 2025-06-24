"use client";

import { useState } from "react";
import VendorDashboardLayout from "../../common/layout";
import { Checkbox, Radio } from "@mui/material";
import { useRouter } from "next/navigation";

const index = () => {
  const [activeTab, setActiveTab] = useState("security");
  const tabs = [
    {
      value: "security",
      content: <Security key={"security"} setActiveTab={setActiveTab} />,
    },
    {
      value: "hosting",
      content: <Hosting key={"hosting"} setActiveTab={setActiveTab} />,
    },
    {
      value: "tax",
      content: <Tax key={"tax"} />,
    },
  ];

  return (
    <VendorDashboardLayout>
      <div className="row y-gap-20 justify-between items-end pb-20 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Manage your Property</h1>
          <div className="text-15 text-light-1">
            Set your security, business informations and taxes.
          </div>
        </div>
        {tabs.map(
          (item) =>
            item.value === activeTab && (
              <div className="col-12">{item.content}</div>
            )
        )}
      </div>
    </VendorDashboardLayout>
  );
};

const Security = ({ setActiveTab }) => {
  const [option, setOption] = useState("text");
  const options = [
    { label: "Text", value: "text" },
    { label: "Call", value: "call" },
  ];
  return (
    <div className="bg-white border-light rounded-8 py-20 px-20">
      <div className="row y-gap-10 x-gap-10">
        <h1 className="text-20 lh-14 fw-500 lh-1">Secure your account</h1>
        <div className="text-15 text-light-1 lh-1">
          Set up two-factor authentication to help protect your personal
          information and keepp your payment safe.
        </div>
        <div className="text-14 lh-1 fw-500 mt-10">
          Which phone number should receive your secure code?
        </div>
        <div className="col-sm-auto">
          <select className="form-select rounded-8 border-light px-15 justify-between fw-400 py-10 h-50 w-ful text-14">
            <option value="+1">United State (+1)</option>
            <option value="+1">Canada (+1)</option>
            <option value="+44">United Kingdom (+44)</option>
          </select>
        </div>
        <div className="col-sm-6">
          <input
            className="border-light rounded-8 text-15 py-10 px-15"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="text-14 lh-1 fw-500 mt-10">
          How do you want to receive your secure code?
        </div>
        {options.map((item, index) => (
          <div
            onClick={() => setOption(item.value)}
            className="col-sm-auto d-flex items-center cursor-pointer"
            key={index}
          >
            <Radio
              aria-label={item.label}
              className="py-0"
              checked={item.value === option}
            />
            <div className="text-14 lh-1 fw-500" id={item.value}>
              {item.label}
            </div>
          </div>
        ))}
        <div className="d-flex justify-end gap-2">
          <button
            className="text-14 rounded-8 py-5 px-20 bg-dark-blue text-white"
            onClick={() => setActiveTab("hosting")}
          >
            Send code
          </button>
        </div>
      </div>
    </div>
  );
};

const Hosting = ({ setActiveTab }) => {
  const [activeType, setActiveType] = useState(1);
  const calendarTypes = [
    {
      id: 1,
      label: "Professional Host",
      description: "Hosting is related to your trade, business, or profession)",
    },
    {
      id: 2,
      label: "Private Host",
      description:
        "Hosting isn't related to your trade, business, or profession",
    },
  ];
  return (
    <div className="bg-white border-light rounded-8 py-20 px-20">
      <div className="row y-gap-10 x-gap-10">
        <h1 className="text-20 lh-14 fw-500 lh-1">
          Tell us more about how you host
        </h1>
        <div className="col-12 mt-5">
          <div className="text-14 lh-1 fw-500">
            Which phone number should receive your secure code?
          </div>
          {calendarTypes.map((type, index) => (
            <div
              className="d-flex items-end mt-5 cursor-pointer"
              key={index}
              onClick={() => setActiveType(type.id)}
            >
              <Radio
                className="flex-shrink-0"
                checked={activeType === type.id}
                name="discount-option"
                value={type.id}
              />
              <div className="flex-grow-1">
                <div className="text-14 fw-500 lh-1">{type.label}</div>
                <div className="text-12 text-light-1 lh-1 mt-5">
                  {type.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 mt-5">
          <h1 className="text-20 lh-14 fw-500 lh-1">
            What is your billing address?
          </h1>
          <div className="text-14 text-light-1 lh-1">
            This should match your banking country. We won't show this to
            travelers.
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Country/Region</h1>
          <select className="form-select rounded-8 border-light px-15 justify-between fw-400 py-10 h-50 w-full text-14 mt-10">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kindom</option>
            <option value="au">Australia</option>
          </select>
        </div>

        <div className="d-flex gap-2 items-center">
          <Checkbox className="py-0 px-0" />
          <div className="text-14 lh-1">Same address as your listing</div>
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Street address</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter street address"
          />
        </div>
        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Unit/Apt/Suite (optional)</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter unit/apt/suite"
          />
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">City</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter city"
          />
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">State/Province</h1>
          <select className="form-select rounded-8 border-light px-15 justify-between fw-400 py-10 h-50 w-full text-14 mt-10">
            <option value="ny">New York</option>
            <option value="wa">Washington</option>
            <option value="tx">Texas</option>
            <option value="ca">California</option>
            <option value="fl">Florida</option>
            <option value="oh">Ohio</option>
            <option value="ga">Georgia</option>
            <option value="mi">Michigan</option>
            <option value="mn">Minnesota</option>
            <option value="il">Illinois</option>
            <option value="mo">Missouri</option>
          </select>
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Postal code</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter postal code"
          />
        </div>

        <div className="col-12 mt-10">
          <h1 className="text-20 lh-14 fw-500 lh-1">
            Who's the business manager?
          </h1>
          <div className="d-flex gap-2 items-center">
            <Checkbox className="py-0 px-0" />
            <div className="text-14 lh-1">Same as account holder</div>
          </div>
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">First Name</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter first name"
          />
        </div>

        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Last Name</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter last name"
          />
        </div>

        <h1 className="text-20 lh-14 fw-500 mt-10">
          What is your business name(optional)?
        </h1>
        <div className="col-sm-6 mt-5">
          <h1 className="text-14 lh-1 fw-500">Full Business Name</h1>
          <input
            className="border-light rounded-8 text-15 py-10 px-15 mt-10"
            type="text"
            placeholder="Enter full business name"
          />
        </div>
        <div className="d-flex justify-end gap-2">
          <button
            className="text-14 rounded-8 py-5 px-20 bg-dark-blue text-white"
            onClick={() => setActiveTab("tax")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Tax = ({ setActiveTab }) => {
  const router = useRouter();

  const [option, setOption] = useState(1);
  const options = [
    {
      id: 1,
      label: "Taxes are per person and per night and collected at check-in",
    },
    {
      id: 2,
      label:
        "Taxes are a percentage of the rental amount and collected at booking",
    },
    {
      id: 3,
      label: "Don’t include taxes. I collect and remit them on my own",
    },
  ];
  return (
    <div className="bg-white border-light rounded-8 py-20 px-20">
      <div className="row y-gap-10 x-gap-10">
        <h1 className="text-20 lh-1 fw-500">A quick note about taxes</h1>
        <div className="text-16 lh-1 fw-500">How do you collect taxes?</div>
        <div className="text-14 lh-1 text-light-1 fw-500">
          We are asking this question because of where you place is located.
        </div>
        {options.map((item, index) => (
          <>
            <div
              onClick={() => setOption(item.id)}
              className="d-flex items-center cursor-pointer gap-2"
              key={index}
            >
              <Radio
                aria-label={item.label}
                className="py-0 px-0"
                checked={item.id === option}
              />
              <div className="text-14 lh-1" id={item.id}>
                {item.label}
              </div>
            </div>
            {item.id == option && option == 2 && (
              <div className="form-input ml-15 pr-20">
                <input
                  type="text"
                  className="px-10 py-5 rounded-8 text-12"
                  style={{ minHeight: "45px" }}
                  required
                />
                <label
                  className="lh-1 text-12 text-light-1 px-5"
                  style={{ left: "15px", top: "10px", background: "white" }}
                >
                  Percent (%)
                </label>
              </div>
            )}
          </>
        ))}
        <div className="d-flex justify-end gap-2">
          <button
            className="text-14 rounded-8 py-5 px-20 bg-dark-blue text-white"
            onClick={() => {
              router.push("/vendor/property/2/review");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
